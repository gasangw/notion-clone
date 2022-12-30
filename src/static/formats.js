export const normalFormat = {
  title: 'Type / for blocks, @ to link docs or people',
  getStyle: (ratio = 1) => ({
    fontSize: `${0.8 * ratio}rem`,
    fontWeight: '200',
  }),
};

export const headingFormats = [
  {
    title: 'Heading 1',
    Shortcut: 'Shortcut: type # + space',
    style: {
      fontSize: '36px',
    },
  },
  {
    title: 'Expandable Heading 1',
    Shortcut: 'Shortcut: type # + space',
    style: {
      fontSize: '38px',
    },
  },
  {
    title: 'Heading 2',
    Shortcut: 'Shortcut: type # + space',
    style: {
      fontSize: '32px',
    },
  },
  {
    title: 'Expandable Heading 2',
    Shortcut: 'Shortcut: type # + space',
    style: {
      fontSize: '34px',
    },
  },
  {
    title: 'Heading 3',
    Shortcut: 'Shortcut: type # + space',
    style: {
      fontSize: '28px',
    },
  },
];
