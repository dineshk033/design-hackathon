export const Questions = [
  {
    type: "radio",
    name: "using_duration",
    title: "How long have you been using the service?",
    choices: [
      "Less than a month",
      "1-6 months",
      "7-12 months",
      "1-3 years",
      "Over 3 years"
    ]
  },
  {
    type: "input",
    name: "name_suggestion",
    title: "How can we improve our company name?"
  },
  {
    type: "radio",
    name: "using_frequency",
    title: "How often did you use the service?",
    choices: [
      "Once a week",
      "2 or 3 times a month",
      "Once a month",
      "Less than once a month"
    ]
  },
  {
    type: "checkbox",
    name: "cancel_reason",
    title: "What was the main reason for cancelling the service?",
    hasOther: true,
    choices: [
      "No longer need it",
      "It didn't meet my needs",
      "Found a better alternative",
      "Found a cheaper alternative",
      "Quality was less than expected",
      "Ease of use was less than expected",
      "Access to the service was less than expected",
      "Customer service was less than expected"
    ]
  },
  {
    type: "Select",
    name: "select_reason",
    title: "What was the main reason for cancelling the service?",
    hasOther: true,
    placeholder: "select a options",
    options: [
      "No longer need it",
      "It didn't meet my needs",
      "Found a better alternative",
      "Found a cheaper alternative",
      "Quality was less than expected",
      "Ease of use was less than expected",
      "Access to the service was less than expected",
      "Customer service was less than expected"
    ]
  },
  {
    type: "radio",
    name: "satisfaction",
    title: "Overall, how satisfied were you with the service?",
    choices: [
      "Very Satisfied",
      "Satisfied",
      "Neutral",
      "Unsatisfied",
      "Very Unsatisfied"
    ]
  },
  {
    type: "comment",
    name: "service_improvements",
    title: "How can we improve our service?"
  }
];
