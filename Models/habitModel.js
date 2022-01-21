import Realm from "realm";


const HabitSchema = {
  name: "Habit",
  properties: {
        lengthBeforeRepeat: { type: "string", default: "yearly", indexed: true},
        name: { type: "string", indexed: true },
        details: { type: "string", default: ""},
        date: { type: "date", default: new Date().getDate()},
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

export const queryYearlyHabits = () => {
  const yearlyHabits = realm.objects("Habit");
  return yearlyHabits;
}


let realm = new Realm({schema: [HabitSchema], schemaVersion: 1});

export default realm;
