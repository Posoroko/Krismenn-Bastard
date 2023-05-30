


export const boards20 = [
    {
        count: 11,
        board: [
            true, true, true, true,
            false, true, true, true,
            false, true, false, true,
            false, true, false, false,
            false, true, false, false,
        ]
    },
    {
        count: 13,
        board: [
            true, true, true, true,
            true, true, true, true,
            false, true, false, true,
            false, true, false, true,
            false, true, false, false,
        ]
    },
    {
        count: 12,
        board: [
            true, true, true, true,
            true, true, true, true,
            false, true, false, true,
            false, false, false, true,
            false, false, false, true,
        ]
    },
    {
        count: 12,
        board: [
            true, true, true, true,
            true, false, true, true,
            true, true, true, false,
            true, false, false, false,
            true, false, false, false,
        ]
    }
]

export const boards20Plus = [
    {
        count: 11,
        board: [
            {icon: true, doodle:  null},    {icon: true, doodle:  null},    {icon: true, doodle:  null},    {icon: true, doodle:  null},
            {icon: false, doodle: null},    {icon: false, doodle: null},    {icon: false, doodle: null},    {icon: false, doodle: null},
            {icon: false, doodle: "arr01"},   {icon: false, doodle: null},    {icon: false, doodle: "star01"},  {icon: false, doodle: null},
            {icon: false, doodle: null},    {icon: false, doodle: null},    {icon: false, doodle: null},    {icon: false, doodle: null},
            {icon: false, doodle: null},    {icon: false, doodle: null},    {icon: false, doodle: null},    {icon: false, doodle: null},
        ]
    },
    {
        count: 13,
        board: [
            true, true, true, true,
            true, true, true, true,
            false, true, false, true,
            false, true, false, true,
            false, true, false, false,
        ]
    },
    {
        count: 12,
        board: [
            true, true, true, true,
            true, true, true, true,
            false, true, false, true,
            false, false, false, true,
            false, false, false, true,
        ]
    },
    {
        count: 12,
        board: [
            true, true, true, true,
            true, false, true, true,
            true, true, true, false,
            true, false, false, false,
            true, false, false, false,
        ]
    }
]

export const boards = {
    boards20: boards20
}



const boardFormat = {
    board0: [
        true, true, true, true, true, true, true, true, true, true,
        false, true, true, true, true, false, true, true, false, true,
        false, false, true, false, true, false, true, false, false, true,
        false, false, false, false, false, false, true, false, false, false,
    ], /* 22 true */
    board1: [
        true, true, true, true, true, true, true, true, true, true,
        true, false, false, true, true, true, false, false, true, false,
        false, false, false, true, false, true, false, false, true, false,
        false, false, false, true, false, false, false, false, true, false,
    ], /* 20 true */
    board2: [
        true, true, true, true, true, true, true,
        true, true, false, true, false, true, false,
        true, false, false, false, false, true, false,
        false, false, false, false, false, true, false,
    ], /* 14 true */
    board3: [
        true, true, true, true, true, true, true,
        false, true, true, false, true, false, true,
        false, true, false, false, true, false, false,
        false, true, false, false, false, false, false,
    ], /* 14 true */
    board4: [
        true, true, true, true,
        false, true, true, true,
        false, true, false, true,
        false, true, false, false,
    ],  /* 10 true */
    board5: [
        true, true, true, true,
        true, true, false, true,
        true, false, false, false,
        true, false, false, false,
    ]   /* 9 true */
}

