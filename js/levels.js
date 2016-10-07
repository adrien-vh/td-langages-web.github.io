var levels = [
  {
    helpTitle : "Selection des éléments par leurs types.",
    selectorName : "Sélécteur d'éléments",
    doThis : "Sélectionnez les assiettes",
    selector : "assiette",
    syntax : "A",
    help : "Selectionne tous les éléments du type <strong>A</strong>. Le type correspond à la balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des éléments de type différent.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette/>
    `
  },
  {
    doThis : "Sélectionnez les boîtes",
    selector : "boite",
    syntax : "A",
    helpTitle : "Selection des éléments par leurs types.",
    sselectorName : "Sélécteur d'éléments",
    help : "Selectionne tous les éléments du type <strong>A</strong>. Le type correspond à la balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des éléments de type différent.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag> elements.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag> elements.',
    ],
    boardMarkup: `
    <boite/>
    <assiette/>
    <boite/>
    `
  },
  {
    doThis : "Sélectionnez les pommes",
    selector : "pomme",
    syntax : "A",
    helpTitle : "Selection des éléments par leurs types.",
    sselectorName : "Sélécteur d'éléments",
    help : "Selectionne tous les éléments du type <strong>A</strong>. Le type correspond à la balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des éléments de type différent.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag> elements.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag> elements.',
    ],
    boardMarkup: `
    <boite>
		<pomme/>
	</boite>
	<boite>
		<pomme/>
	</boite>
    <assiette/>
    <boite/>
	<pomme/>
    `
  },
  {
    doThis : "Sélectionnez l'assiette colorée",
    selector : "#coloree",
    selectorName: "Sélecteur par ID",
    helpTitle: "Sélection les éléments par leur ID",
    syntax: "#id",
    help : "Selectionne les éléments ayant l'id <strong>id</strong>. Le sélecteur par ID peut également être combiné avec le sélecteur par type.",
    examples : [
      "<strong>#cool</strong> sélectionne l'élément avec <strong>id=\"cool\"</strong>",
      '<strong>ul#long</strong> sélectionne <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <assiette id="coloree"/>
    <assiette/>
    <boite/>
    `
  },
  {
    helpTitle: "Sélection d'un élément dans un autre élément",
    selectorName : "Sélecteur descendant",
    doThis : "Sélectionnez la pomme dans l'assiette",
    selector : "assiette pomme",
    syntax: "A&nbsp;&nbsp;B",
    help : "Sélectionne tous les <strong>B</strong> dans les <strong>A</strong>. <strong>B</strong> est appelé un descendant car il est à l'intérieur d'un autre élément.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> sélectionnes tous les éléments <tag>strong</tag> dans n\'importe quel élément <tag>p</tag>',
      '<strong>#coloree&nbsp;&nbsp;span</strong> sélectionnes tous les éléments <tag>span</tag> qui sont à l\'intérieur de l\'élément avec <strong>id="coloree"</strong>',
    ],
    boardMarkup : `
    <boite/>
    <assiette>
      <pomme/>
    </assiette>
    <pomme/>
    `
  },
  {
    doThis : "Sélectionnez le cornichon dans l'assiette colorée",
    selector : "#coloree cornichon",
    helpTitle: "Combinaison des sélecteurs descendants et par ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Vous pouvez combiner n\'importe quel sélecteur avec le sélecteur descendant.',
    examples : [
      '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont à l\'intérieur de l\'élément avec <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <boite>
    <orange/>
    </boite>
    <assiette id="coloree">
      <cornichon/>
    </assiette>
    <assiette>
      <cornichon/>
    </assiette>
    `
  },
  {
    doThis : "Sélectionnez les petites pommes",
    selector : ".petite",
    selectorName: "Sélecteur par classe",
    helpTitle: "Sélectionner les éléments par leur classe",
    syntax: ".classe",
    help : 'Le sélecteur par classe sélectionne tous les éléments avec cet attribut class. Les éléments ne peuvent avoir qu\'un seul ID mais plusieurs classes.',
    examples : [
    '<strong>.neato</strong> sélectionne tous les éléments avec <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <pomme/>
    <pomme class="petite"/>
    <assiette>
      <pomme class="petite"/>
    </assiette>
    <assiette/>
    `
  },
  {
    doThis : "Sélectionnez les petites pommes vertes",
    selector : ".petite.verte",
    selectorName: "Combinaison de sélecteurs par classe",
    helpTitle: "Sélectionner les éléments par plusieurs de leurs classes",
    syntax: ".classe1.classe2",
    help : 'Sélectionne les éléments ayant <strong>class="classe1 classe2"</strong> ou <strong>class="classe2 classe1"</strong>',
    examples : [
    '<strong>.neato.big</strong> sélectionne tous les éléments avec <strong>class="neato big"</strong> ou <strong>class="big neato"</strong>'
    ],
    boardMarkup : `
    <pomme class="verte"/>
    <pomme class="petite"/>
    <assiette>
      <pomme class="petite"/>
    </assiette>
    <pomme class="petite verte"/>
    <assiette>
      <pomme class="petite verte"/>
    </assiette>
    `
  },
  {
    doThis : "Sélectionnez les petites oranges",
    selector : "orange.petite",
    helpTitle: "Combiner le sélecteur par classe",
    syntax: "A.classe",
    help : 'Vous pouvez combiner le sélecteur par classe avec d\'autres sélecteurs, comme le sélecteur d\'élément.',
    examples : [
      '<strong>ul.important</strong> sélectionne tous les éléments <tag>ul</tag> avec <strong>class="important"</strong>',
      '<strong>#big.wide</strong> sélectionne tous les éléments avec <strong>id="big"</strong> ayant également <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <pomme/>
    <pomme class="petite"/>
    <boite>
      <orange class="petite"/>
    </boite>
    <assiette>
      <orange/>
    </assiette>
    <assiette>
      <orange class="petite"/>
    </assiette>`
  },
  {
    doThis : "Sélectionnez les petites oranges dans les boites",
    selector : "boite orange.petite",
    syntax: "Point d'étape",
    help : 'Combinez ce que vous avez vu précedemment pour résoudre ce problème',
    boardMarkup : `
    <boite>
      <orange/>
    </boite>
    <orange class="petite"/>
    <boite>
      <orange class="petite"/>
    </boite>
    <boite>
      <pomme class="petite"/>
    </boite>
    <boite>
      <orange class="petite"/>
    </boite>
    `
  },
  {
    doThis : "Sélectionnez toutes les assiettes et les boîtes",
    selector : "assiette,boite",
    selectorName : "Combinaison par virgule",
    helpTitle: "Combiner les sélecteurs en les séparant par une virgule",
    syntax : "A, B",
    help : 'Sélectionne tous les éléments <strong>A</strong> et <strong>B</strong>. Vous pouvez combiner n\'importe quels sélecteurs de la sorte, sans être limité à 2.',
    examples: [
    '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> et tous les éléments avec <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>'
    ],
    boardMarkup : `
    <cornichon class="petite"/>
    <cornichon/>
    <assiette>
      <cornichon/>
    </assiette>
    <boite>
      <cornichon/>
    </boite>
    <assiette>
      <cornichon/>
    </assiette>
    <cornichon/>
    <cornichon class="petite"/>
    `
  },
  {
    doThis : "Selectionnez tout !",
    selector : "*",
    selectorName:  "Le sélecteur universel",
    helpTitle: "Sélectionner tout !",
    syntax : "*",
    help : 'Vous pouvez tout sélectionner avec le sélecteur universel.',
    examples : [
      '<strong>p *</strong> sélectionne tous les éléments dans les élements <tag>p</tag>.',
    ],
    boardMarkup : `
    <pomme/>
    <assiette>
      <orange class="petite" />
    </assiette>
    <boite/>
    <boite>
      <orange/>
    </boite>
    <assiette id="coloree"/>
    `
  },
  {
    doThis : "Sélectionnez tout ce qui se trouve dans une assiette",
    selector : "assiette *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combiner le sélecteur universel",
    help : 'Sélectionne tous les éléments dans un <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> sélectionne tous les éléments dans les élements <tag>p</tag>.',
      '<strong>ul.coloree *</strong> sélectionne tous les éléments dans tous les éléments ayant <tag>ul class="coloree"</tag>.'
    ],
    boardMarkup: `
    <assiette id="coloree">
      <orange class="petite"/>
    </assiette>
    <assiette>
      <cornichon/>
    </assiette>
    <pomme class="petite"/>
    <assiette>
      <pomme/>
    </assiette>`
  },
  {
    doThis : "Sélectionnez toutes les pommes qui sont à la suite d'une assiette",
    selector : "assiette + pomme",
    helpTitle: "Sélectionner un élément qui en suit directement un autre",
    selectorName: "Sélecteur de frère adjacent",
    syntax : "A + B",
    help : "Sélectionne tous les éléments <strong>B</strong> qui suivent directement un <strong>A</strong>. Les éléments qui se suivent sont dits &laquo; frères &raquo;. Ils sont au même niveau ou à la même profondeur",
    examples : [
      '<strong>p + .intro</strong> sélectionne tous les élement avec <strong>class="intro"</strong> suivant directement un <tag>p</tag>',
      '<strong>div + a</strong> sélectionne tous les éléments <tag>a</tag> qui suivent directement un <tag>div</tag>'
    ],
    boardMarkup : `
    <boite>
      <pomme class="petite"/>
    </boite>
    <assiette />
    <pomme class="petite"/>
    <assiette />
    <pomme/>
    <pomme class="petite"/>
    <pomme class="petite"/>
    `
  },
  {
    selectorName: "Sélecteur général de frères",
    helpTitle: "Sélectionner les éléments qui en suivent un autre",
    syntax: "A ~ B",
    doThis : "Sélectionnez tous les cornichons à droite d'une boîte",
    selector : "boite ~ cornichon",
    help : "Sélectionnes tous les éléments <strong>B</strong> qui suivent un <strong>A</strong>. C'est la même chose que le sélecteur adjacent (A + B), sauf que tous les élements <strong>B</strong> qui suivent sont sélectionnés plutôt qu'un.",
    examples : [
      '<strong>div ~ a</strong> sélectionne tous les éléments <tag>a</tag> qui suivent un <tag>div</tag>'
    ],
    boardMarkup : `
    <cornichon/>
    <boite>
      <orange class="petite"/>
    </boite>
    <cornichon class="petite"/>
    <cornichon/>
    <assiette>
      <cornichon/>
    </assiette>
    <assiette>
      <cornichon class="petite"/>
    </assiette>
    `
  },
  {
    selectorName: "Sélecteur d'enfant direct",
    syntax: "A > B&nbsp;",
    doThis : "Sélectionner les pommes directement sur une assiette",
    selector : "assiette > pomme",
    helpTitle: "Sélectionner les enfant directs d'un élément",
    help : "Sélectionne les éléments <strong>B</strong> enfants directs de <strong>A</strong>. Un élément enfant est un élément inclus directement dans un autre sans intermédiaire. <br><br>Les éléments imbriqués plus profondément sont appelés des descendants",
    examples : [
      "<strong>div > .intro</strong> sélectionne tous les éléments ayant <strong>class=\"intro\"</strong> enfants directs d'un <tag>div</tag>"
    ],
    boardMarkup: `
    <assiette>
      <boite>
        <pomme/>
      </boite>
    </assiette>
    <assiette>
      <pomme/>
    </assiette>
    <assiette/>
    <pomme class="petite"/>
    `
  },
  {
    selectorName: "",
    syntax: "",
    doThis : "Sélectionner les prunes",
    selector : "prune",
    helpTitle: "",
    help : "",
    examples : [],
    boardMarkup: `
    <assiette>
      <prune/>
    </assiette>
    <assiette>
      <orange/>
    </assiette>
    <assiette/>
    <prune class="petite"/>
    `
  },
  {
    selectorName: "",
    syntax: "",
    doThis : "Sélectionner les assiettes et les pommes",
    selector : "assiette, pomme",
    helpTitle: "",
    help : "",
    examples : [],
    boardMarkup: `
    <assiette>
      <pomme/>
    </assiette>
    <boite>
      <orange/>
    </boite>
    <assiette/>
    <boite/>
    <pomme class="petite verte"/>
    `
  },
  {
    selectorName: "",
    syntax: "",
    doThis : "Sélectionner les pommes dans l'assiette colorée",
    selector : "#coloree pomme",
    helpTitle: "",
    help : "",
    examples : [],
    boardMarkup: `
    <assiette id="coloree">
      <pomme/>
      <prune/>
      <pomme/>
    </assiette>
    <boite>
      <orange/>
    </boite>
    <assiette/>
    <boite>
      <pomme class="verte"/>
    </boite>
    <prune class="petite"/>
    `
  },
  {
    selectorName: "",
    syntax: "",
    doThis : "Sélectionner les pommes dans l'assiette colorée et les orange dans les boites",
    selector : "#coloree pomme, boite orange",
    helpTitle: "",
    help : "",
    examples : [],
    boardMarkup: `
    <assiette id="coloree">
      <pomme/>
      <prune/>
      <pomme/>
    </assiette>
    <assiette/>
    <boite>
      <pomme class="verte"/>
    </boite>
    <prune class="petite"/>
    <boite>
      <orange/>
    </boite>
    `
  },
  {
    selectorName: "",
    syntax: "",
    doThis : "Sélectionner les pommes, les prunes et les oranges",
    selector : "pomme, prune, orange",
    helpTitle: "",
    help : "",
    examples : [],
    boardMarkup: `
    <assiette>
      <pomme/>
    </assiette>
    <boite>
      <orange/>
    </boite>
    <assiette/>
    <boite>
      <pomme class="verte"/>
    </boite>
    <prune class="petite"/>
    `
  },
  {
    selectorName: "",
    syntax: "",
    doThis : "Sélectionner les petites pommes et les petites oranges",
    selector : "pomme.petite, orange.petite",
    helpTitle: "",
    help : "",
    examples : [],
    boardMarkup: `
    <assiette>
      <pomme  class="petite"/>
    </assiette>
    <boite>
      <orange class="petite"/>
    </boite>
    <assiette/>
    <boite>
      <pomme class="verte petite"/>
    </boite>
    <pomme />
    <prune class="petite"/>
    `
  },
  {
    selectorName: "",
    syntax: "",
    doThis : "Sélectionnez l'orange dans la boite à côté de l'assiette colorée",
    selector : "#coloree + boite > orange",
    helpTitle: "",
    help : "",
    examples : [],
    boardMarkup: `
    <assiette id="coloree">
      <pomme  class="petite"/>
    </assiette>
    <boite>
      <orange/>
    </boite>
    <assiette>
      <orange/>
      <orange/>
    </assiette>
    <assiette/>
    <boite>
      <pomme class="verte petite"/>
    </boite>
    <pomme />
    <prune class="petite"/>
    `
  }
];
