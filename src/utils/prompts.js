import { ChatCompletionRequestMessageRoleEnum } from "openai";

const initialPrompt = `When I give you a series of questions and answers, I want you to give me 3 possible careers that I can choose from. The response format will be in JSON. I need that format to be able to read the response and display it in the UI. For example, if I ask you, "What are your interests and passions? I like programming, what skills and strengths do you have? I'm good with computers, what are your achievements and previous work experiences? I once competed in a hackathon". The response should be something like this:
{
  "results":
  [
    { 
      "key_word": "mechatronics",
      "career": "Engineering in mechatronics",
      "difficulty": "High",
      "description": "Mechatronics Engineering is an interdisciplinary degree that combines knowledge of mechanical, electronic, and control engineering for the design, construction, and maintenance of mechatronic systems, which are automated systems with mechanical, electronic, and software components.",
      "salary": "$80.000/anual",
      "education": "Technical and professional education (University or Institute)",
      "avoid": "Not recommended if you don't like math and physics, don't have technical skills, or don't enjoy working with mechanical and electronic components."

    },
    {
      "key_word": "software-engineering",
      "career": "Systems Engineering",
      "difficulty": "High",
      "description": "A career that focuses on the design, development and maintenance of computer systems. Professionals in this area combine knowledge of programming, systems analysis and project management to create efficient and scalable technological solutions.",
      "salary": "$60,000/year",
      "education": "Higher Education",
      "avoid": "Not recommended if you don't like programming or teamwork, have no interest in staying up to date with the latest technologies, or don't feel comfortable solving complex problems"
    },
    {
      "key_word": "programming",
      "career": "Computer Engineering",
      "difficulty": "High",
      "description": "A career that focuses on the study and application of principles and techniques related to computing and information technology. Professionals in this area design, develop, and manage software systems, networks, and databases , and work on the development of innovative technological solutions.",
      "salary": "$70,000/year",
      "education": "Secondary education",
      "avoid": "Not recommended if you don't like programming and solving complex problems, if you don't have logical and analytical skills, or if you're not willing to stay abreast of technological advances and learn continuously."
    }
  ]
}
`;

export const QUESTIONS = [
  {
    label: "What are your interests and passions?",
  },
  {
    label: "What skills and strengths do you have?",
  },
  {
    label: "What are your achievements and previous work experiences?",
  },
  {
    label: "What type of work environment do you feel most comfortable in?",
  },
  {
    label: "What kinds of tasks and responsibilities do you enjoy doing?",
  },
  {
    label: "What level of education are you willing to get?",
  },
  {
    label: "Do you have any long-term aspirations or specific career goals?",
  },
];
export const INITIAL_MESSAGES = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: initialPrompt,
  },
];

const roadMapPromt = `When I give you a career give me a roadmap that I can follow so I can become a professional in that career. The response format will be in JSON. So if I tell you "Computer Engineering". An example of a response should be something like this:
{
  title: "Becoming a Professional in Computer Engineering",
  steps: 
    [
      {
        "step": "Set a Clear Goal",
        "description": "Define your specific interests within computer engineering. Identify areas like hardware design, software development, computer architecture, networking, or embedded systems."
      },
      {
        "step": "Education",
        "description":"Pursue a bachelor's degree in computer engineering or a related field. Look for accredited universities or colleges that offer comprehensive computer engineering programs. Take courses in digital logic design, programming, computer architecture, circuits, algorithms, and operating systems."
      }
    ]
}

Where you can add as many steps as you feel necessary.
`;

export const ROADMAP_INITIAL_MESSAGES = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: roadMapPromt,
  },
];


