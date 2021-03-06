import * as ModuleToMock from "./module-to-mock";
import { isBeforeNowConsumer, isLiveNowConsumer } from "./module-consumer";

describe("ModuleConsumer", () => {
  describe("isBeforeNowConsumer", () => {
    let mockIsBeforeNow;
    beforeEach(() => {
      mockIsBeforeNow = jest.spyOn(ModuleToMock, "isBeforeNow");
    });

    afterEach(() => {
      mockIsBeforeNow.mockReset();
    });

    test("date is in the past", () => {
      mockIsBeforeNow.mockReturnValue(true);
      expect(isBeforeNowConsumer("fake-date")).toBe(
        "This date is in the past!"
      );
    });

    test("date is in the future", () => {
      mockIsBeforeNow.mockReturnValue(false);
      expect(isBeforeNowConsumer("fake-date")).toBe(
        "This date is in the future!"
      );
    });
  });

  describe("isLiveNowConsumer", () => {
    let mockIsLiveNow;
    beforeEach(() => {
      mockIsLiveNow = jest.spyOn(ModuleToMock, "default");
    });

    afterEach(() => {
      mockIsLiveNow.mockReset();
    });

    test("date is live", () => {
      mockIsLiveNow.mockReturnValue(true);
      expect(isLiveNowConsumer("fake-date")).toBe("This event is live!");
    });

    test("date is not live", () => {
      mockIsLiveNow.mockReturnValue(false);
      expect(isLiveNowConsumer("fake-date")).toBe("This event is not live.");
    });
  });
});
