angular.module("Store")

    .service("StoreService", function () {
        this.items = [
            {
                name: "MX-2079",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22281916_359291411212116_6587052416639576549_n.jpg?_nc_eui2=v1%3AAeF21jXvM4Eb2LHsA8X80DvZUqk8hqh2jN0A5KMFE16WZAgTsmmJwZZbrPtEcZd6Mln88tJAevyCal95HO3vDWXzwtzeoZ2D62D8_qzIxgX8iA&oh=ac2cbee3983f8ee30cbe22950e7c3141&oe=5AE6D87C",
                quantity: 100
            },
            {
                name: "MX-2025",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22309065_359291404545450_7126938723291424099_n.jpg?_nc_eui2=v1%3AAeEFpFxTmNhJLXcSaQi0JuYdMCAairThvp-6H6KoXCqgiuZftpy6pwb-ZZro9ClsVdojz27uKIFR-FCPYrjOJG1KgvrkkW9_5mcXmrlc5ILAfg&oh=c9d3b17f5e7d7acbcafee19c8479399a&oe=5AF51853",
                quantity: 100
            },
            {
                name: "MX-2054",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22196408_359291391212118_3599810565967387523_n.jpg?_nc_eui2=v1%3AAeGZJEcTpTS4pY9ceE0BMR8svwhdPg-XvddYlbIpmyNkEljd7K10oUK3oLPkLmw8dEPJCWclZLbRAPgUVFIvjVwba-gl8_0xiVcUB6qaHBwnUg&oh=e0e395c82e1aa18f611a70c5a21ddeeb&oe=5AF22F4E",
                quantity: 100
            },
            {
                name: "MX-2022",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22282099_359291351212122_1749263246467472882_n.jpg?_nc_eui2=v1%3AAeFX3QbjX_pSduTbz7usZEyoXF3UjkDkUABxCaIVNiV3p_Xx8d5UvuHmkl-46ZQPmhOdLI7vplHpn4e6poL3KovgUxiv0Or24OUfB8O8zXx36Q&oh=110dd3d4da6e64b74245dbed48c30393&oe=5AF69E06",
                quantity: 100
            },
            {
                name: "MX-2037",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22310131_359291341212123_3857929503908973598_n.jpg?_nc_eui2=v1%3AAeGPauJSCQgCaXWZJAU-LGbbB1ALG_G393YIjTez13yjqYuWMd94Z0sCC1VUYM7UtXDkCABpFqyrYN95WCKDOGp-y9cE9c6FFVFY1PfGzZSEnQ&oh=041b6f18ed6cdc0a046d70073700f119&oe=5AB9729B",
                quantity: 100
            },
            {
                name: "MX-2023",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22228315_359291304545460_5987569659188578967_n.jpg?_nc_eui2=v1%3AAeHYDGZm1e5viOCIRyvz-p8laPKAmfYjZSL1CRgNXpKXb-PB4HiU2C7J_pPuJuVCWpUN8WvwXiiW_yIKF6ltCr9BgWcQU0KGcoxZYr4lbP8RzQ&oh=a94b083cb53498e13ee856ecd9270b1b&oe=5AF4F1FF",
                quantity: 100
            },
            {
                name: "MX-2010",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22228624_359291294545461_7691562603628482426_n.jpg?_nc_eui2=v1%3AAeFcL12Op_ngFztBNmmht7Ayx2Mid6EyFq6bDPC1PcPC4MqLTAReLxXt4u8lxY40M49hVVPn543hd-FDKdX-9iFuxRcssN16Kqcof-g9FvA8wg&oh=5140ae925990115b14a9c39e0958f21d&oe=5AF3D0E7",
                quantity: 100
            },
            {
                name: "MX-2002",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22282072_359291274545463_6233296798228710959_n.jpg?_nc_eui2=v1%3AAeEHqFDw5fg_Ja7YedMgOHliKOqVYGJaTWvhE40fYTC5NUzHK5L919vGxnzVMnrNbEWnf-bBhPRV78auOqdHTYKi3weDjM29id4Q69OEq64HJA&oh=8bb386c6775ef651505029c368e05e62&oe=5AF6FE6F",
                quantity: 100
            },
            {
                name: "MX-2075",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22308783_359291231212134_7595233026626892758_n.jpg?_nc_eui2=v1%3AAeFP4MuFP9O_WBl8cMEK-kOyp-KQyDSSpcIOm_kcCPNKxgR5EDzCXJc5bQazCxoHJ0vNf4pFgX--ZosZdFxpEaHUmniX1J3mWHV6SwMk5ryHsw&oh=05842f71be851f48c7cf3c73b7777957&oe=5AB12D99",
                quantity: 100
            },
            {
                name: "MX-2039",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22281825_359291187878805_1499917380176677146_n.jpg?_nc_eui2=v1%3AAeE-MASolpg8CrRFjwFHs65kezUekZT4pGKOkJE1dXtt-OQmpJC1DMGPFtB67gb-4zqbLA-zFe_jnBzqcAzvyVeARTgB-5e1Yc6CwEMRBiZGUQ&oh=ab3e9e5758607ca4b4680fc79ae85d5e&oe=5AB30F60",
                quantity: 100
            },
            {
                name: "MX-2081",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22310256_359291117878812_4797109542211677162_n.jpg?_nc_eui2=v1%3AAeGio0oxarQwHdZ5tDfO2ajeHYq8v9gcwES-Z5uUf0LSG-DMyJLDDiuoJrg-ThSyb_EbEtJP96cpYEG38HZY8bkDwn27MXo1Kp8d4Huf7749BQ&oh=11d24996af3766a846ba1e559c4e22eb&oe=5AECA254",
                quantity: 100
            },
            {
                name: "MX-2035",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22279595_359291097878814_8902986623481635214_n.jpg?_nc_eui2=v1%3AAeE3Mrmq_mpgUsakEIkn2neXiNiHBR7x1eyWh5uZLbyBm34uLttBoG9y0STNom2C0U4rkuKAX-s4eJD0IjB9IizHt8X0CgyH8RT__J34Omfw6g&oh=96f5a609d15eb0c4ea8c4d42dc0469f2&oe=5AF5A4D8",
                quantity: 100
            },
            {
                name: "MX-2019",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22196389_359291114545479_6516366419846085557_n.jpg?_nc_eui2=v1%3AAeHNv8e7tA_F4W8mzYTgiGDQpU0t8z3QEsSB5wby0f2AOwrLC8eisA8EItyDq3AVFC7GkV15DDqUtjcSztp8qVUNWdY5wOEM6sncB5IfbhCmrA&oh=a0e49f24ed80505b8f1b866ccf1baea1&oe=5AE67FBC",
                quantity: 100
            },
            {
                name: "MX-2026",
                image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t1.0-9/22196268_359290964545494_2873557530399307548_n.jpg?_nc_eui2=v1%3AAeHZPOfYh2_nxz13qd7T-Sbp0nKk2pSuxuPF_6jKA5U0kdH3JFyjwFxVcu4v8v9BwqSUDBiwPNzImbzM0QRiLK2jCm1mlbOyR7hjJ2ZwGBaVGw&oh=415f26ce09623f1014d97628ec85acda&oe=5AF06B68",
                quantity: 100
            }
        ];
    });
