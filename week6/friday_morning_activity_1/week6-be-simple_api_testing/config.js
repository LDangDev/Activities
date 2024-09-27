import request from "supertest";
import { expect } from "chai";

const api = request("https://airportgap.com/api");

export { api as request, expect };
