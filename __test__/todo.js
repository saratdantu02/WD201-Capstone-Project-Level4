/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todolist Test Suite", () => {
  beforeAll(()   => {
    add({
        title: "Test todo",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      });
  });
  test("Should add new todo", () => {
    const todoItemCount = all.length; 
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemCount + 1);
  });
  test("Should mark a todo as complete", () =>{
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  })
  test("Should check retrieval of overdue items", () =>{
    overdue().forEach((a) => {
        expect(Object.keys(a).length).toBe(2);
        expect(overdue().length).toEqual(2);
    });
  });
  test("Should check retrieval of due today items", () =>{
    dueToday().forEach((a) => {
        expect(Object.keys(a).length).toBe(2);
        expect(dueToday().length).toEqual(2);
    });
  });
  test("Should check retrieval of due later items", () =>{
    dueLater().forEach((a) => {
        expect(Object.keys(a).length).toBe(2);
        expect(dueLater().length).toEqual(2);
    });
  });
});
