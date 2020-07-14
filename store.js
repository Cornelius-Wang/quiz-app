const STORE {
    questions: [
        /* 1 */
        {
            id: 1,
            question: 'What is the best state to incorporate in?',
            answers: [
                'Whatever state your company is based in',
                'Delaware',
                'Texas',
                'Wyoming'
            ],
            correctAnswer: 'Delaware'
        },
        /* 2 */
        {
            id: 2,
            question: 'What is a tenet of lean customer development?',
            answers: [
                'Build it, and they will come',
                'The customer knows best',
                'Why wait for people to come when you can pay them to care',
                'It’s better to have 100 people who love you, than 10,000 who are apathetic'
            ],
            correctAnswer: "It’s better to have 100 people who love you, than 10,000 who don't",
        },
        /* 3 */
        {
            id: 3,
            question: 'What is a FAST agreement?',
            answers: [
                'Final Administrative Simplified Term',
                'First Anchor Stock Turnaround',
                'Founder Advisor Standard Template',
                'First Arbitration Signing Template'
            ],
            correctAnswer: 'Founder Advisor Standard Template'
        },
        /* 4 */
        {
            id: 4,
            question: 'What do you need to file within 30 days of issuing restricted stock to minimize tax liability?',
            answers: [
                '1099B',
                '8949',
                '83(b) Election',
                'Schedule D'
            ]
            correctAnswer: '83(b) Election'
        },
        /* 5 */
        {
            id: 5,
            question: 'What is the difference between a Series A and Seed round?',
            answers: [
                "Basically nothing (in today's market)",
                'How much money you have raised',
                'How much money you can raise',
                'What kind of investors will participate'
            ],
            correctAnswer: 'Basically nothing'
        },
        /* 6  */
        {
            id: 6,
            question: 'What character archetype makes for a good Founder?',
            answers: [
                'A Greater Fool',
                'Type-A Leader',
                'Hustler',
                'The Coding Guru'
            ]
            correctAnswer: 'A Greater Fool'
        },
        /* 7 */
        {
            id: 7,
            question: 'What is a “paper prototype"?',
            answers: [
                'A physical prototype, made out of corrugated double-walled cardboard or “paper”',
                'A wire-framing technique to simulate a user’s experience through an application on a piece of paper',
                'The MVP or minimum viable prototype that will allow you to have paying customers',
                'When you decide on important product decisions through a paper plane flying competition'
            ]
            correctAnswer: 'A wire-framing technique to simulate a user’s experience through an application on a piece of paper'
        },
        /* 8 */
        {
            id: 8,
            question: 'What makes for a good company name?',
            answers: [
                'Something that you paid a branding consultant thousands of dollars for',
                'A Portmanteau - Two words combined into one i.e. facebook',
                'Something short and easy to spell based on pronunciation',
                'Something that has an available domain'
            ]
            correctAnswer: 'Something short and easy to spell based on pronunciation'
        },
        /* 9 */
        {
            id: 9,
            question: 'What is the reason that most startups fail?',
            answers: [
                'Product/Market Fit',
                'Co-founder disagreements',
                'Running out of money through lack of funding',
                'No paying customers'
            ]
            correctAnswer: 'Co-founder disagreements'
        },
        /* 10 */
        {
            id: 10,
            question: 'What is stopping you from building a business?',
            answers: [
                'Nothing',
                'Everything',
                'Most things',
                'Having a life'
            ]
            correctAnswer: 'Nothing'
        }
    ];
    /* Global Counters */
    currentQuestion: 0;
    score: 0
}