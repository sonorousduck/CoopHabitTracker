import Realm from "realm";

// let getPastWeek = () => {
//   let weekAgo = new Date()
//   weekAgo.setDate(weekAgo.getDate() - 8)
//   weekAgo.setHours(0, 0, 0, 0)


//   return realm.objects("Habit").filtered("date >= $0", weekAgo)
// }

const HabitSchema = {
  name: "Habit",
  properties: {
        lengthBeforeRepeat: { type: "string", default: "yearly", indexed: true},
        name: { type: "string", indexed: true },
        details: { type: "string", default: ""},
        date: { type: "date", default: new Date()},
        completed: { type: "bool", default: false},
        streak: { type: "int", default: 0},
        timesCompleted: { type: "int", default: 0}
      },
}

export const recordHabit = (name, details, date) => {
  realm.write(() => {
    realm.create("Habit", {
      name: name,
      details: details,
      date: date,
    });
  });
};


const updateYearlyHabits = () => {
  let monthAgo = new Date();
  monthAgo.setMonth(monthAgo.getMonth() - 6)
  let query = realm.objects("Habit").filtered("date <= $0", monthAgo)
  let thisYear = new Date();
  for (let i = 0; i < query.length; i++)
  {
    let updateDate = query[i].date;
    console.log(updateDate);
    updateDate.setFullYear(thisYear.getFullYear());
    realm.write(() => {
      query[i].date = updateDate;
    })
  }
}

export const queryYearlyHabits = () => {
  const yearlyHabits = realm.objects("Habit");

  return yearlyHabits;
}

export const queryYearlyMostRecentHabits = (numberHabits) => {
  let filterDate = new Date();
  let nextMonth = new Date();
  nextMonth.setMonth(filterDate.getMonth() + 1);
  updateYearlyHabits();

  const yearlyHabits = realm.objects("Habit").filtered("date >= $0 && date <= $1", filterDate, nextMonth);
//  const yearlyHabits = realm.objects("Habit").filtered("date >= $0 && date <= $1", filterDate, nextMonth);

  console.log(yearlyHabits);

  return yearlyHabits

}




let realm = new Realm({schema: [HabitSchema], schemaVersion: 1});

export default realm;
