import inquirer from "inquirer";

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'nome',
            message: 'qual seu nome ?',
        },{
            type: 'list',
            name: 'idade',
            message: 'qual sua idade ?',
            choices: [
                '29 a 39',
                '40 a 50',
                '50+'
            ]

        }
    ]
).then((answers) => {
    console.log(
        "oi" + answers.nome +
        "com" + answers.idade + "anos de vida !"
    )
});
