// Node modules
import { test, expect } from "vitest";

// Project files
import roman from "./roman";

test("Throws error if number is zero or negative ", () => {
  // Arrange
  const number1 = 0; // zero
  const number2 = -1; // negative

  // Act
  const test1 = () => roman(number1);
  const test2 = () => roman(number2);

  // Assert
  expect(test1).toThrowError();
  expect(test2).toThrowError();
});

test("Throws error if number is higher than limit", () => {
  // Arrange
  const number = 4000;

  // Act
  const test = () => roman(number);

  // Assert
  expect(test).toThrowError();
});

test("Can count from 1 to 9", () => {
  expect(roman(1)).toBe("I");
  expect(roman(2)).toBe("II");
  expect(roman(3)).toBe("III");
  expect(roman(4)).toBe("IV");
  expect(roman(5)).toBe("V");
  expect(roman(6)).toBe("VI");
  expect(roman(7)).toBe("VII");
  expect(roman(8)).toBe("VIII");
  expect(roman(9)).toBe("IX");
});

test("Can count from 10 to 19", () => {
  expect(roman(10)).toBe("X");
  expect(roman(11)).toBe("XI");
  expect(roman(12)).toBe("XII");
  expect(roman(13)).toBe("XIII");
  expect(roman(14)).toBe("XIV");
  expect(roman(15)).toBe("XV");
  expect(roman(16)).toBe("XVI");
  expect(roman(17)).toBe("XVII");
  expect(roman(18)).toBe("XVIII");
  expect(roman(19)).toBe("XIX");
});

test("Can count from 20 to 29", () => {
  expect(roman(20)).toBe("XX");
  expect(roman(21)).toBe("XXI");
  expect(roman(22)).toBe("XXII");
  expect(roman(23)).toBe("XXIII");
  expect(roman(24)).toBe("XXIV");
  expect(roman(25)).toBe("XXV");
  expect(roman(26)).toBe("XXVI");
  expect(roman(27)).toBe("XXVII");
  expect(roman(28)).toBe("XXVIII");
  expect(roman(29)).toBe("XXIX");
});

test("Can count from 30 to 39", () => {
  expect(roman(30)).toBe("XXX");
  expect(roman(31)).toBe("XXXI");
  expect(roman(32)).toBe("XXXII");
  expect(roman(33)).toBe("XXXIII");
  expect(roman(34)).toBe("XXXIV");
  expect(roman(35)).toBe("XXXV");
  expect(roman(36)).toBe("XXXVI");
  expect(roman(37)).toBe("XXXVII");
  expect(roman(38)).toBe("XXXVIII");
  expect(roman(39)).toBe("XXXIX");
});

test("Can count from 40 to 49", () => {
  expect(roman(40)).toBe("XL");
  expect(roman(41)).toBe("XLI");
  expect(roman(42)).toBe("XLII");
  expect(roman(43)).toBe("XLIII");
  expect(roman(44)).toBe("XLIV");
  expect(roman(45)).toBe("XLV");
  expect(roman(46)).toBe("XLVI");
  expect(roman(47)).toBe("XLVII");
  expect(roman(48)).toBe("XLVIII");
  expect(roman(49)).toBe("XLIX");
});

test("Can count from 50 to 59", () => {
  expect(roman(50)).toBe("L");
  expect(roman(51)).toBe("LI");
  expect(roman(52)).toBe("LII");
  expect(roman(53)).toBe("LIII");
  expect(roman(54)).toBe("LIV");
  expect(roman(55)).toBe("LV");
  expect(roman(56)).toBe("LVI");
  expect(roman(57)).toBe("LVII");
  expect(roman(58)).toBe("LVIII");
  expect(roman(59)).toBe("LIX");
});

test("Can count from 60 to 69", () => {
  expect(roman(60)).toBe("LX");
  expect(roman(61)).toBe("LXI");
  expect(roman(62)).toBe("LXII");
  expect(roman(63)).toBe("LXIII");
  expect(roman(64)).toBe("LXIV");
  expect(roman(65)).toBe("LXV");
  expect(roman(66)).toBe("LXVI");
  expect(roman(67)).toBe("LXVII");
  expect(roman(68)).toBe("LXVIII");
  expect(roman(69)).toBe("LXIX");
});

test("Can count from 70 to 79", () => {
  expect(roman(70)).toBe("LXX");
  expect(roman(71)).toBe("LXXI");
  expect(roman(72)).toBe("LXXII");
  expect(roman(73)).toBe("LXXIII");
  expect(roman(74)).toBe("LXXIV");
  expect(roman(75)).toBe("LXXV");
  expect(roman(76)).toBe("LXXVI");
  expect(roman(77)).toBe("LXXVII");
  expect(roman(78)).toBe("LXXVIII");
  expect(roman(79)).toBe("LXXIX");
});

test("Can count from 80 to 89", () => {
  expect(roman(80)).toBe("LXXX");
  expect(roman(81)).toBe("LXXXI");
  expect(roman(82)).toBe("LXXXII");
  expect(roman(83)).toBe("LXXXIII");
  expect(roman(84)).toBe("LXXXIV");
  expect(roman(85)).toBe("LXXXV");
  expect(roman(86)).toBe("LXXXVI");
  expect(roman(87)).toBe("LXXXVII");
  expect(roman(88)).toBe("LXXXVIII");
  expect(roman(89)).toBe("LXXXIX");
});

test("Can count from 90 to 99", () => {
  expect(roman(90)).toBe("XC");
  expect(roman(91)).toBe("XCI");
  expect(roman(92)).toBe("XCII");
  expect(roman(93)).toBe("XCIII");
  expect(roman(94)).toBe("XCIV");
  expect(roman(95)).toBe("XCV");
  expect(roman(96)).toBe("XCVI");
  expect(roman(97)).toBe("XCVII");
  expect(roman(98)).toBe("XCVIII");
  expect(roman(99)).toBe("XCIX");
});

test("Can count hundreds", () => {
  expect(roman(100)).toBe("C");
  expect(roman(200)).toBe("CC");
  expect(roman(300)).toBe("CCC");
  expect(roman(400)).toBe("CD");
  expect(roman(500)).toBe("D");
  expect(roman(600)).toBe("DC");
  expect(roman(700)).toBe("DCC");
  expect(roman(800)).toBe("DCCC");
  expect(roman(900)).toBe("CM");
});

test("Can count milliards", () => {
  expect(roman(1000)).toBe("M");
  expect(roman(2000)).toBe("MM");
  expect(roman(3000)).toBe("MMM");
});

test("Can count the highest number possible", () => {
  // Arrange
  const number = 3999;
  const result = "MMMCMXCIX";

  // Act
  const test = roman(number);

  // Assert
  expect(test).toBe(result);
});
