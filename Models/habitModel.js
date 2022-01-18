import Realm from "realm";


const HabitSchema = {
  name="Habit",
  properties: {
        id: 'int',
        lengthBeforeRepeat: { type: "string", default: "yearly", indexed=true},
        name: { type: "string", indexed: true },
        details: { type: "string", default: ""},
        completed: { type: "bool", default: false},
        repeatEvery: { type: "int", default: 1},
        skipYears: { type: "int", default: 0},
        streak: { type: "int", default: 0},
        timesCompleted: { type = "int", default: 0}
      },
    primaryKey: "id"
}

const realm = await Realm.open({
  path: "HabitDatabase",
  schema: [HabitSchema],
});


export const recordHabit = (lengthBeforeRepeat, name, details, completed=false, repeatEvery, skipYears, streak=0, timesCompleted=0) => new Promise((resolve, reject) => {
  realm.write(() => {
    realm.create("Habit", {
      lengthBeforeRepeat: lengthBeforeRepeat,
      name: name,
      details: details,
      completed: completed,
      repeatEvery: repeatEvery,
      skipYears: skipYears,
      streak: streak,
      timesCompleted: timesCompleted,
    }).catch((error) => reject(error));;
  });
}



// export const insertNewHabitList = (newHabitList) => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm => {
//     realm.write(() => {
//       realm.create(HABIT_LIST_SCHEMA, newHabitList);
//       resolve(newHabitList);
//     })
//   }).catch((error) => reject(error));
// });

// import Realm from "realm";


// const databaseOptions = {
//   path: "CoopHabitTracker.realm",
//   schema: [HabitSchema, HabitListSchema],
//   schemaVersion: 0,
// }


// export const HABIT_LIST_SCHEMA = "HabitList"
// export const HABIT_SCHEMA = "Habit"


// export const HabitSchema ={
//   name: HABIT_SCHEMA,
//   primaryKey: 'id',
//   properties: {
//     id: 'int',
//     lengthBeforeRepeat: { type: "string", default: "yearly", indexed=true},
//     name: { type: "string", indexed: true },
//     details: { type: "string", default: ""},
//     completed: { type: "bool", default: false},
//     repeatEvery: { type: "int", default: 1},
//     skipYears: { type: "int", default: 0},
//     streak: { type: "int", default: 0},
//     timesCompleted: { type = "int", default: 0}
//   }
// };

// export const HabitListSchema = {
//   name: HABIT_LIST_SCHEMA,
//   primaryKey: 'id',
//   properties: {
//     id: 'int',
//     name: 'string',
//     creationDate: 'date',
//     yearlyHabits: { type:'list', objectType: YEARLY_HABIT_SCHEMA}
//   }
// };


// export const insertNewHabitList = (newHabitList) => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm => {
//     realm.write(() => {
//       realm.create(HABIT_LIST_SCHEMA, newHabitList);
//       resolve(newHabitList);
//     })
//   }).catch((error) => reject(error));
// });

// export const updateNewHabitList = (habitList) => new Promise((resolve, reject) => { 
//   Realm.open(databaseOptions).then(realm => {
//     realm.write(() => {
//       let updatingHabitList = realm.objectForPrimaryKey(HABIT_LIST_SCHEMA, habitList.id)
//       updatingHabitList.name = habitList.name;
//       resolve();
//     });
//   }).catch((error) => reject(error))
// });

// export const deleteNewHabit = (habitListId) => new Promise((resolve, reject) => {
//   Realm.open(databaseOptions).then(realm => {
//     realm.write(() => {
//       let deletingHabitList = realm.objectForPrimaryKey(HABIT_LIST_SCHEMA, habitListId);
//       realm.delete(deletingHabitList)
//     })
//   }).catch((error) =>  reject(error))
// })
