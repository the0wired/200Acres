const url = process.env.URL ?? "https://example.com";
const title = "200 Acres Honey";

module.exports = {
    en: {
        url,
        title,
        description: "TODO",
        feed: {
            subtitle: "TODO",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "TODO",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        source: {
            label: 'github',
            link: 'https://github.com/moody-person/11ty-starter'
        },
        author: {
            url,
            name: "John Smithson",
            email: "the.wir3d@gmail.com",
        },
        posts: {
            title: `Posts | ${title}`,
            description: "Blog posts list",
        },
        about: {
            title: `About | ${title}`,
        },
        contact: {
            title: `Contact | ${title}`,
        },
    },
};
