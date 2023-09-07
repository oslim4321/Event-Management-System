export const eventInput = [
    {
        name: 'eventType',
        title: 'Event Type',
        type: 'category', // Input type
    },

    {
        name: 'eventName',
        title: 'Event Name',
        type: 'text',
    },
    {
        name: 'eventDate',
        title: 'Date',
        type: 'date', // You can use "date" input type
    },
    {
        name: 'eventLocation',
        title: 'Event Location',
        type: 'text',
    },
    {
        name: 'entryFee',
        title: 'Entry Fee',
        type: 'number'
    },
    // {
    //     name: 'organizer',
    //     title: 'Event Organizer',
    //     type: 'text',
    // },
    {
        name: 'attire',
        title: 'Attire',
        type: 'text',
    },
    {
        name: 'guestCount',
        title: 'Guest Count',
        type: 'number', // Input type for numbers
    },
    {
        name: 'specialInstructions',
        title: 'Special Instructions',
        type: 'text',
    },
    {
        name: 'eventDesc',
        title: 'Event Description',
        type: 'textarea', // Special type for textarea
    },
    {
        name: 'image',
        title: 'Image',
        type: 'text', // Input type
    },
];

export const SpecialEventKey = [
    {
        Wedding: [
            'musicianNames',
        ],
        Birthday: [
            'celebrantName',
            'age'
        ],
        Burial: [
            'tributeDetails',
            'musicianNames'
        ],
        Musical: [
            'musicianNames',
            'musicGenre',
            'ticketPrice'
        ]
    }
]