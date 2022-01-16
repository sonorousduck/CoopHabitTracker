import Realm from "realm";

const HabitSchema = {
    name: "habit",
    properties: {
        title: "string",
        completions: "int",
        streak: "int",
      }
}