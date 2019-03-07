import userService from "@/services/UserService";
import LoginData from "@/domain/loginData";
import AccessToken from "@/domain/accessToken";
import axios from 'axios';

jest.mock('axios');

const actualToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjMsXCJ2ZXJzaW9uXCI6MCxcInVzZXJuYW1lXCI6XCJUaW1vXCIsXCJwYXNzd29yZFwiOm51bGwsXCJhdXRob3JpdGllc1wiOltcIlVTRVJcIixcIkFETUlOXCJdLFwiYWNjb3VudE5vbkV4cGlyZWRcIjp0cnVlLFwiYWNjb3VudE5vbkxvY2tlZFwiOnRydWUsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjp0cnVlLFwiZW5hYmxlZFwiOnRydWV9IiwiZXhwIjoxNTUxOTkwNzI1fQ.EVmqrmUOSPWxwyhuqlaKAoiU-l_A7K1GRZIVk1UxFsyIted_U_4TddvLwQdmgbjLDiICNUMhPIrIUmedJ-PN1w";
const actualAuthorizationHeader = "Bearer " + actualToken;

it("login", () => {
  const loginData = new LoginData("name", "password");

  const responseObj = { headers: { authorization: actualToken } };

  (axios.post as jest.Mock).mockResolvedValueOnce(responseObj);

  expect(userService.login(loginData)).resolves.toBe(new AccessToken(actualToken));
});

it("refresh", () => {
  const responseObj = { headers: { authorization: actualToken } };

  (axios.post as jest.Mock).mockResolvedValueOnce(responseObj);

  expect(userService.refreshAccessToken()).resolves.toBe(new AccessToken(actualToken));
});
