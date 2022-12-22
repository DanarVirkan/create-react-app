const {
  chatTimeFormatter,
  getName,
  pad,
  titleCase,
} = require("../formatter");

describe("formatter", () => {
  describe("function pad", () => {
    it("should return the padded number correctly", () => {
      const number = 3;
      const digit = 2;

      const padded = pad(number, digit);

      expect(padded).toEqual("03");
    });
  });
  describe("function chatTimeFormatter", () => {
    it("should return just now in the chat when time less than a minute", () => {
      const datetime = new Date(Date.now());

      const formattedTime = chatTimeFormatter(datetime);
      expect(formattedTime).toEqual("just now");
    });
    it("should return dd MM in the chat when not in the same date", () => {
      const datetime = "2022-12-10T10:53:30.005";

      const formattedTime = chatTimeFormatter(datetime);
      expect(formattedTime).toEqual("10 Dec");
    });
  });

  describe("function getName", () => {
    it("should get name from email", () => {
      const email = "antonio_vivaldi@gmail.com";
      const email2 = "antonio.vivaldi@gmail.com";

      const name = getName(email);
      const name2 = getName(email2);

      expect(name).toEqual("Antonio Vivaldi");
      expect(name2).toEqual("Antonio Vivaldi");
    });
  });
  describe("function titleCase", () => {
    it("should returning title from name", () => {
      const name = "yngwie malmsteen";

      const formatted = titleCase(name);
      expect(formatted).toEqual("Yngwie Malmsteen");
    });
  });
});
