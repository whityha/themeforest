import { Cards } from '@/types';

export const theme = {
    colors: {
        blue: '#185cff',
        darkBlue: '#002B4E',
        lightBlue: '#467DFF',
        tertiary: '#f0f9ff',
        helperBlue1: '#194060',
        helperBlue2: '#607D94',
        helperBlue3: '#C9DCEC',
        black: '#292D33',
        grey: '#9497A1',
        background: '#f1f6fa',
        red: '#c14040',
        white: '#ffffff',
        green: '#35b969',
    },
    shadows: {
        shadowButton: '0px 12px 30px 0px #185cff2e',
        shadowCard1: '0px 2px 20px 17px #185CFF0A',
        shadowCard2: '0px 12px 30px 17px #185CFF0A',
        shadowCard3: '0px 4px 12px 0px #0C44CC1A',
        shadowDropdown: '0px 1px 2px 0px #002B4E4D, 0px 2px 6px 0px #002B4E26',
    },
    padding: {
        p1: 10,
        p2: 20,
        p3: 30,
        p4: 40,
        p5: 50,
        p6: 60,
        p7: 70,
        p8: 80,
        p9: 90,
        p10: 100,
        p11: 110,
        p12: 120,
    },
    margin: {
        m1: 10,
        m2: 20,
        m3: 30,
        m4: 40,
        m5: 50,
        m6: 60,
        m7: 70,
        m8: 80,
        m9: 90,
        m10: 100,
        m11: 110,
        m12: 120,
    },
    fontSize: {
        extra: 80,
        s0: 57,
        s1: 46,
        s2: 38,
        s3: 30,
        s4: 22,
        s5: 20,
        s6: 16,
        s7: 14,
        s8: 12,
    },
    fontFamily: {
        main: 'Manrope',
        secondary: 'Open Sans',
    },
    logo: {
        width: 146,
    },
    borderRadius: {
        small: 6,
        large: 20,
        round: 50,
    },
    wrapperWidth: {
        large: 1110,
    },
    buttonsWidth: {
        medium: 110,
        large: 190,
        max: 450,
    },
    cardsWidth: {
        [Cards.Testimonials]: 350,
        [Cards.Customers]: 540,
        [Cards.Articles]: 350,
    },
    gap: {
        g1: 10,
        g2: 20,
        g3: 30,
        g4: 40,
        g5: 50,
        g6: 60,
        g10: 100,
        g12: 120,
        links: 12,
    },
    lineHeight: {
        small: 1.15,
        large: 1.75,
    },
    transition: {
        fast: 0.2,
    },
    borders: {
        error: '2px solid #FF0033',
    },
};
