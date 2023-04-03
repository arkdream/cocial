import { isActive } from ".";

describe("Should isActive() work", () => {
  // Tests that isactive returns true when pathname includes routename. tags: [happy path]
  it("test_path_includes_route", () => {
    expect(isActive("/", "/")).equal(true);
    expect(isActive("/home", "/")).equal(false);
    expect(isActive("/home/about", "/home")).equal(true);
    expect(isActive("/products/123", "/products")).equal(true);
  });

  // Tests that isactive returns true when routename is an empty string. tags: [edge case]
  it("test_empty_route_name", () => {
    expect(isActive("/home", "")).equal(false);
    expect(isActive("/", "")).equal(true);
    expect(isActive("/products/123", "")).equal(false);
  });

  // Tests that isactive returns false when routename is longer than pathname. tags: [edge case]
  it("test_route_longer_than_path", () => {
    expect(isActive("/about", "/about/about")).equal(true);
    expect(isActive("/", "/about")).equal(false);
    expect(isActive("/products", "/products/123")).equal(true);
  });

  // Tests that isactive returns false when pathname is longer than routename but does not include routename. tags: [edge case]
  it("test_path_longer_than_route_not_includes", () => {
    expect(isActive("/longer/path", "/short")).equal(false);
  });

  // Tests that isactive is case sensitive for pathname and routename. tags: [other possible issue]
  it("test_case_sensitivity", () => {
    expect(isActive("/path", "/Path")).equal(false);
  });

  // Tests that isactive handles trailing slashes in pathname and routename. tags: [other possible issue]
  it("test_trailing_slashes", () => {
    expect(isActive("/path/", "/path")).equal(true);
    expect(isActive("/path", "/path/")).equal(true);
    expect(isActive("/path/", "/path/")).equal(true);
  });
});
