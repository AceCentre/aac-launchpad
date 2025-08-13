const fetch = require('node-fetch');

const LAUNCHPAD_URL = 'http://localhost:4000/graphql';

async function testListenerMediated() {
  console.log('Testing listener-mediated template with default values...');
  
  // Test with default values (no changes)
  const defaultAnswers = [
    { id: "colorScheme", value: "basic" },
    { id: "empty-cell-one-text", value: "" },
    { id: "empty-cell-two-text", value: "" },
    { id: "empty-cells", value: "empty" },
    { id: "space-text", value: "SPACE" },
    { id: "start-again-text", value: "START AGAIN" },
    { id: "delete-text", value: "DELETE" },
    { id: "casing", value: "capital" },
    { id: "command-casing", value: "capital" },
    { id: "fullBackgroundColor", value: "rgb(255,255,255)" },
    { id: "numberBackgroundColor", value: "rgb(255,255,255)" },
    { id: "consonantBackgroundColor", value: "rgb(255,255,255)" },
    { id: "vowelBackgroundColor", value: "rgb(255,255,255)" },
    { id: "punctuationBackgroundColor", value: "rgb(255,255,255)" },
    { id: "commandBackgroundColor", value: "rgb(255,255,255)" },
    { id: "emptySpaceBackgroundColor", value: "rgb(255,255,255)" },
    { id: "numberTextColor", value: "rgb(0,0,0)" },
    { id: "consonantTextColor", value: "rgb(0,0,0)" },
    { id: "vowelTextColor", value: "rgb(0,0,0)" },
    { id: "punctuationTextColor", value: "rgb(0,0,0)" },
    { id: "commandTextColor", value: "rgb(0,0,0)" },
    { id: "emptySpaceTextColor", value: "rgb(0,0,0)" },
    { id: "numberBorderColor", value: "rgb(0,0,0)" },
    { id: "consonantBorderColor", value: "rgb(0,0,0)" },
    { id: "vowelBorderColor", value: "rgb(0,0,0)" },
    { id: "punctuationBorderColor", value: "rgb(0,0,0)" },
    { id: "commandBorderColor", value: "rgb(0,0,0)" },
    { id: "emptySpaceBorderColor", value: "rgb(0,0,0)" },
    { id: "gap", value: "2" },
    { id: "row-gap", value: "2" },
    { id: "border-width", value: "0.5" },
    { id: "font", value: "helvetica" },
    { id: "textColorOnBackground", value: "rgb(0,0,0)" },
    { id: "font-size", value: "31" }
  ];

  const defaultResponse = await fetch(LAUNCHPAD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: 'generateBoard',
      variables: {
        answers: defaultAnswers,
        templateId: 'listener-mediated-launchpad',
      },
      query: `
        mutation generateBoard($answers: [AnswerInput!]!, $templateId: String!) {
          generateBoard(answers: $answers, templateId: $templateId) {
            success
            message
            fileLocation
          }
        }
      `,
    }),
  });

  const defaultResult = await defaultResponse.json();
  console.log('Default values result:', defaultResult);

  // Test with changed values (change font)
  const changedAnswers = [
    ...defaultAnswers.filter(a => a.id !== 'font'),
    { id: "font", value: "times" }
  ];

  const changedResponse = await fetch(LAUNCHPAD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: 'generateBoard',
      variables: {
        answers: changedAnswers,
        templateId: 'listener-mediated-launchpad',
      },
      query: `
        mutation generateBoard($answers: [AnswerInput!]!, $templateId: String!) {
          generateBoard(answers: $answers, templateId: $templateId) {
            success
            message
            fileLocation
          }
        }
      `,
    }),
  });

  const changedResult = await changedResponse.json();
  console.log('Changed values result:', changedResult);
}

testListenerMediated().catch(console.error);
