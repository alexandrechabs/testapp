import React from "react";
import Navbar from "@/components/Navbar";
import { Graph } from "@/components/graph";

const About = () => {
  const data = {
    name: "Welmo",
    children: [
      {
        name: "David Touati",
        children: [
          {
            name: "Caroline Herbert",
          },
          {
            name: "Frédéric Schwaentzel",
            children: [
              {
                name: "Alexia Argoud",
              },
              {
                name: "Antoine Monfajon",
              },
              {
                name: "Christine Sastre",
              },
              {
                name: "Dominique Jeanne",
              },
              {
                name: "Dorothée Davis",
                children: [
                  {
                    name: "Amandine Biart",
                  },
                  {
                    name: "Erol Karaaslan",
                  },
                  {
                    name: "Gerald Legret",
                  },
                  {
                    name: "Isaac Mouyal",
                  },
                  {
                    name: "Ivy Loison",
                  },
                  {
                    name: "Sylvia Dumont",
                  },
                ],
              },
              {
                name: "Georges Andriko",
                children: [
                  {
                    name: "Camille Hénon",
                  },
                  {
                    name: "Clara Montariol",
                  },
                  {
                    name: "Dorothée Buzet",
                  },
                  {
                    name: "Estelle Caillac",
                  },
                  {
                    name: "Floriane Ait Aoudia",
                  },
                  {
                    name: "Irina Palermo",
                  },
                  {
                    name: "Karim Bouhaouala",
                  },
                  {
                    name: "Nacym Derradji",
                  },
                  {
                    name: "Souleymane Ndaw",
                  },
                  {
                    name: "Yousuf Latif",
                  },
                ],
              },
              {
                name: "Jean Poinot",
              },
              {
                name: "Jennifer Yapo Maouassa",
              },
              {
                name: "Lelia Piquet",
                children: [
                  {
                    name: "Elodie Nesmoz",
                  },
                  {
                    name: "Julie Argoud",
                  },
                  {
                    name: "Kévin Millon",
                  },
                  {
                    name: "Nali Tong",
                  },
                  {
                    name: "Pierre Edgard Likibi",
                  },
                  {
                    name: "Sabrina Chergui",
                  },
                  {
                    name: "Stéphanie Lesauvage",
                  },
                  {
                    name: "Yann Casanova",
                  },
                ],
              },
              {
                name: "Mélanie Hodeau",
              },
              {
                name: "Nicolas Didier",
              },
              {
                name: "Patrick Mouyeke",
              },
              {
                name: "Romane De Saint Martin",
              },
              {
                name: "Sabine Lehmann",
              },
              {
                name: "Sarah Galet",
              },
              {
                name: "Thierry Hossman",
              },
            ],
          },
          {
            name: "Gilles Briallon",
          },
          {
            name: "Julien Carasco",
            children: [
              {
                name: "Anna Cray",
              },
              {
                name: "Christel Bernardini",
              },
              {
                name: "Claude Roy",
              },
              {
                name: "Fairouz Ban Ammar",
              },
              {
                name: "Fleur Froger",
              },
              {
                name: "Hans Nieuweboer",
                children: [
                  {
                    name: "Cedrick Medegan",
                  },
                  {
                    name: "Claudine Coicadan",
                  },
                  {
                    name: "Emilie Lacoste",
                  },
                  {
                    name: "Jennifer Galais",
                  },
                  {
                    name: "Julie Fau",
                  },
                  {
                    name: "Mahamed Azaiez",
                  },
                  {
                    name: "Morgane Chabre",
                  },
                  {
                    name: "Sara Guedih",
                  },
                  {
                    name: "Thomas Verin",
                  },
                ],
              },
              {
                name: "Marie Ponsin",
              },
              {
                name: "Nathalie Willerval",
              },
              {
                name: "Nelly Labbez",
              },
              {
                name: "Raphael Isman",
              },
              {
                name: "Xavier Cardoso",
                children: [
                  {
                    name: "Bastien Launay",
                  },
                  {
                    name: "Gabriel Chazal",
                  },
                  {
                    name: "Gilbert Akel",
                  },
                  {
                    name: "Nathalie Sas",
                  },
                ],
              },
              {
                name: "Zohour Debbarh",
                children: [
                  {
                    name: "Adeline Pierre",
                  },
                  {
                    name: "Alexis Bernaus",
                  },
                  {
                    name: "Anie Dryvers",
                  },
                  {
                    name: "Karine Fantoni",
                  },
                  {
                    name: "Sacha Castella",
                  },
                ],
              },
            ],
          },
          {
            name: "Olivier Lerasle",
          },
          {
            name: "Roman Rouab",
            children: [
              {
                name: "Audrey Thibault",
              },
              {
                name: "Eden Walas",
              },
              {
                name: "Jean Baptiste Mechossie",
              },
              {
                name: "Kassandra Blot",
              },
              {
                name: "Kevin Lucas",
              },
              {
                name: "Sebastien Schott",
              },
            ],
          },
          {
            name: "Vivien Endji Longoa",
          },
        ],
      },
      {
        name: "Pierre Colin",
        children: [
          {
            name: "Aminata Cisse",
          },
          {
            name: "Amélie Lebrun",
          },
          {
            name: "Benoit Joly",
          },
          {
            name: "Bernard Guez",
            children: [
              {
                name: "Amélie Rubli",
              },
              {
                name: "Anthony Lemaitre",
              },
              {
                name: "Antonio Oliviero",
              },
              {
                name: "Christophe Renaudin",
              },
              {
                name: "Céline Turpin",
              },
              {
                name: "Florian Cirencien",
              },
              {
                name: "Gulsun Yazici",
              },
              {
                name: "Jérémie Sellam",
              },
              {
                name: "Stéphane Bouret",
              },
              {
                name: "Yael Balloul",
              },
            ],
          },
          {
            name: "Boris Gossart",
          },
          {
            name: "Grégory Marchand",
          },
          {
            name: "Ludovic Bibrac",
          },
          {
            name: "Marie-Claude Sainte Luce",
          },
          {
            name: "Marion Doret",
          },
          {
            name: "Nicolas Szwec",
          },
          {
            name: "Philippe Vilcot",
          },
          {
            name: "Randy Barros",
          },
          {
            name: "Remy Cabrot",
          },
          {
            name: "Ruben Serfati",
          },
          {
            name: "Saïda Visser",
          },
          {
            name: "Tanguy Lenozeh",
          },
          {
            name: "Youned Mrabet",
          },
        ],
      },
      {
        name: "Romain Baumard",
        children: [
          {
            name: "Alexis Guillon",
          },
          {
            name: "Antoine Derrien",
          },
          {
            name: "Christian Lignier",
            children: [
              {
                name: "Laurine Tihay",
              },
              {
                name: "Léa Aubert",
              },
              {
                name: "Raoudha El Hadj Yedder",
              },
            ],
          },
          {
            name: "Faiza R'guiba",
          },
          {
            name: "Jérémy Dussart",
          },
          {
            name: "Laura Grouios",
            children: [
              {
                name: "Angélique Thépaut-Calvez",
              },
              {
                name: "Caroline Puigmal",
              },
              {
                name: "Etienne Marignale",
              },
              {
                name: "fleur Fernandez",
                children: [
                  {
                    name: "Damien Manet",
                  },
                  {
                    name: "Marthe Guerin",
                  },
                ],
              },
              {
                name: "Francine Mondon",
              },
              {
                name: "Laetitia Corduant",
              },
              {
                name: "Love Voundi",
              },
              {
                name: "Nalini Bonpapa",
              },
              {
                name: "Robin Marty",
              },
              {
                name: "Sandie Severini",
              },
              {
                name: "Tony Phok",
              },
              {
                name: "Victor Vuillier",
              },
            ],
          },
          {
            name: "Mehdi Yasar",
          },
          {
            name: "Romain Boisson",
          },
          {
            name: "Romain Roncayolo",
            children: [
              {
                name: "Alexandre Ferry",
              },
              {
                name: "Angélique Boulanger",
              },
              {
                name: "Colombe Dehaese",
              },
              {
                name: "Elisa Da Silva Costa Fernandes",
              },
              {
                name: "Elodie Chatelais",
              },
              {
                name: "Gaëlle Gouy",
              },
              {
                name: "Marie Vigot",
              },
              {
                name: "Nadège Zülch",
              },
              {
                name: "Romain Girard",
              },
              {
                name: "Romain Vaillant",
              },
              {
                name: "Sarah Kateb",
              },
              {
                name: "Thomas Joly",
              },
              {
                name: "Veronica Hammer",
              },
            ],
          },
          {
            name: "Vera Lopes",
          },
        ],
      },
      {
        name: "Alexandra	Orinel",
        children: [
          {
            name: "Allison Botton",
          },
          {
            name: "Carine Ribeyron",
          },
          {
            name: "Erin Wagner",
          },
          {
            name: "Hajar Ait Bentaibi",
          },
          {
            name: "Kémi Roy",
          },
          {
            name: "Louis-Pierre Bernard",
          },
          {
            name: "Nouria Kaddour",
          },
          {
            name: "Vincent Lamy",
          },
        ],
      },
    ],
  };

  let nb = (JSON.stringify(data).match(/name/g) || []).length;

  return (
    <>
      <Navbar />
      <div className="center">
        <Graph data={data} height={nb * 24.5} />
      </div>
    </>
  );
};

export default About;
