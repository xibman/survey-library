import { Selector, ClientFunction } from "testcafe";
import { url, frameworks, initSurvey, takeElementScreenshot, wrapVisualTest, resetFocusToBody } from "../../helper";

const title = "Advanced header screenshot";

fixture`${title}`.page`${url}`;

frameworks.forEach(framework => {
  fixture`${framework} ${title}`.page`${url}${framework}`;

  test("Check survey advanced header inherit width from survey", async (t) => {
    await wrapVisualTest(t, async (t, comparer) => {
      await t.resizeWindow(1200, 1000);
      await initSurvey(framework, {
        showQuestionNumbers: "on",
        focusFirstQuestionAutomatic: true,
        title: "Survey Title",
        description: "Survey description",
        logo: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
        "widthMode": "static",
        "width": "600",
        headerView: "advanced",
        questions: [
          {
            type: "text",
            title: "Question title",
            name: "q1"
          }
        ]
      });
      await ClientFunction(() => {
        (<any>window).survey.applyTheme({
          "header": {
            height: "500px",
            inheritWidthFrom: "survey"
          }
        });
      })();
      await takeElementScreenshot("survey-advanced-header-width-by-survey.png", Selector(".sd-root-modern"), t, comparer);
    });
  });
  test("Check survey advanced header with overlap", async (t) => {
    if (framework === "vue") return;
    await wrapVisualTest(t, async (t, comparer) => {
      await t.resizeWindow(1200, 1000);
      await initSurvey(framework, {
        showQuestionNumbers: "on",
        focusFirstQuestionAutomatic: true,
        title: "Survey Title",
        description: "Survey description",
        logo: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
        "widthMode": "static",
        "width": "600",
        headerView: "advanced",
        questions: [
          {
            type: "text",
            title: "Question title",
            name: "q1"
          }
        ]
      });
      await ClientFunction(() => {
        (<any>window).survey.applyTheme({
          "header": {
            height: "500px",
            inheritWidthFrom: "survey",
            "overlapEnabled": true,
          },
          "cssVariables": {
            "--sjs-header-backcolor": "rgba(25, 179, 148, 1)"
          }
        });
      })();
      await takeElementScreenshot("survey-advanced-header-with-overlap.png", Selector(".sd-root-modern"), t, comparer);

      await t.resizeWindow(500, 600);
      await ClientFunction(() => {
        (<any>window).survey.setIsMobile(true);
      })();
      await takeElementScreenshot("survey-advanced-header-mobile-with-overlap.png", Selector(".sd-root-modern"), t, comparer);
    });
  });
  test("Check survey TOC + advanced header with overlap", async (t) => {
    if (framework === "vue") return;
    await wrapVisualTest(t, async (t, comparer) => {
      await t.resizeWindow(1200, 1000);
      await initSurvey(framework, {
        showQuestionNumbers: "on",
        focusFirstQuestionAutomatic: true,
        title: "Survey Title",
        description: "Survey description",
        logo: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
        "widthMode": "static",
        "width": "600",
        headerView: "advanced",
        showTOC: true,
        questions: [
          {
            type: "text",
            title: "Question title",
            name: "q1"
          }
        ]
      });
      await ClientFunction(() => {
        (<any>window).survey.applyTheme({
          "header": {
            height: "500px",
            inheritWidthFrom: "survey",
            "overlapEnabled": true,
          },
          "cssVariables": {
            "--sjs-header-backcolor": "rgba(25, 179, 148, 1)"
          }
        });
      })();
      await takeElementScreenshot("survey-toc-advanced-header-with-overlap.png", Selector(".sd-root-modern"), t, comparer);

      await t.resizeWindow(500, 600);
      await ClientFunction(() => {
        (<any>window).survey.setIsMobile(true);
      })();
      await takeElementScreenshot("survey-toc-advanced-header-mobile-with-overlap.png", Selector(".sd-root-modern"), t, comparer);
    });
  });
  test("Check header background color modes", async (t) => {
    await wrapVisualTest(t, async (t, comparer) => {
      await t.resizeWindow(800, 600);
      await initSurvey(framework, {
        showQuestionNumbers: "on",
        focusFirstQuestionAutomatic: true,
        title: "Survey Title",
        description: "Survey description",
        questions: [
          {
            type: "text",
            title: "Question title",
            name: "q1"
          }
        ]
      });
      await ClientFunction(() => {
        (<any>window).survey.applyTheme({ "cssVariables": {}, "header": {}, "headerView": "advanced" });
      })();
      await t.wait(500);
      await resetFocusToBody();
      await takeElementScreenshot("survey-advanced-header-background-accent.png", Selector(".sd-root-modern"), t, comparer);

      await ClientFunction(() => {
        (<any>window).survey.applyTheme({ "cssVariables": { "--sjs-header-backcolor": "transparent" }, "header": {}, "headerView": "advanced" });
      })();
      await t.wait(500);
      await resetFocusToBody();
      await takeElementScreenshot("survey-advanced-header-background-none.png", Selector(".sd-root-modern"), t, comparer);

      await ClientFunction(() => {
        (<any>window).survey.applyTheme({ "cssVariables": { "--sjs-header-backcolor": "transparent" }, "header": {}, "headerView": "advanced" });
      })();
      await t.wait(500);
      await resetFocusToBody();
      await takeElementScreenshot("survey-advanced-header-background-custom-none.png", Selector(".sd-root-modern"), t, comparer);

      await ClientFunction(() => {
        (<any>window).survey.applyTheme({ "cssVariables": { "--sjs-font-headertitle-color": "rgba(255, 0, 0, 1)", "--sjs-font-headerdescription-color": "rgba(255, 0, 0, 1)", "--sjs-header-backcolor": "rgba(0, 255, 0, 1)" }, "header": {}, "headerView": "advanced" });
      })();
      await t.wait(500);
      await resetFocusToBody();
      await takeElementScreenshot("survey-advanced-header-background-custom-set.png", Selector(".sd-root-modern"), t, comparer);
    });
  });

  test("Check header background color modes", async (t) => {
    await wrapVisualTest(t, async (t, comparer) => {
      await t.resizeWindow(1920, 1080);
      await initSurvey(framework, {
        showQuestionNumbers: "on",
        "description": "Building your own form management\nsystem has never been easier.",
        "logoPosition": "right",
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "radiogroup",
                "name": "question1",
                "choices": [
                  "Item 1",
                  "Item 2",
                  "Item 3"
                ]
              }
            ]
          }
        ]
      });

      await ClientFunction(() => {
        (<any>window).survey.applyTheme({
          "cssVariables": {
            "--sjs-header-backcolor": "transparent"
          },
          "header": {
            "inheritWidthFrom": "survey"
          },
          "headerView": "advanced"
        });
      })();
      await t.wait(500);
      await resetFocusToBody();
      await takeElementScreenshot("survey-advanced-header-text-alignment.png", Selector(".sd-root-modern"), t, comparer);
    });
  });
});