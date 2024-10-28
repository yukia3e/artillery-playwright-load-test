import { Page } from "playwright";
import {
  ArtilleryVUContext,
  ArtilleryEvents,
  ArtilleryTest,
} from "../../../artillery/types/artillery";
import { expect } from "@playwright/test";

//
// The code in this function was generated with
// playwright codegen
// https://playwright.dev/docs/codegen
//
export async function example(
  page: Page,
  vuContext: ArtilleryVUContext,
  events: ArtilleryEvents,
  test: ArtilleryTest
) {
  await page.goto("https://www.artillery.io/");
}
