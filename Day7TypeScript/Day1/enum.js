// // what is enum 
// 1 . A group of constant ,
// 2. That can assign a number to your string and make an easy comparison .
// 3 . enum Role [value]
// Why enum is use in TypeScript?
// In TypeScript, enums, or enumerated types, are data structures of constant length that hold a set of constant values. Each of these constant values is known as a member of the enum. Enums are useful when setting properties or values that can only be a certain number of possible values.
// What is enum example?
// An enum type is a special data type that enables for a variable to be a set of predefined constants. The variable must be equal to one of the values that have been predefined for it. Common examples include compass directions (values of NORTH, SOUTH, EAST, and WEST) and the days of the week.
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["read_only_user"] = 2] = "read_only_user";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.admin);
console.log(Role.manager);
console.log(Role.read_only_user);
