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
    doThis : "Sélectionnez la petite pomme",
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
    <pomme/>
    <pomme class="petite"/>
    `
  },
  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Select a first child element inside of another element",
    doThis : "Select the top orange",
    selector : "assiette :first-child",
    syntax: ":first-child",

    help : "You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples : [
      '<strong>:first-child</strong> sélectionne tous les éléments first child elements.',
      '<strong>p:first-child</strong> sélectionne tous les éléments first child <tag>p</tag> elements.',
      '<strong>div p:first-child</strong> sélectionne tous les éléments first child <tag>p</tag> elements that are in a <tag>div</tag>.'
    ],
    boardMarkup :`
    <boite/>
    <assiette />
    <assiette>
      <orange />
      <orange />
      <orange />
    </assiette>
    <cornichon class="petite" />
    `
  },
  {
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Select an element that are the only element inside of another one.",
    doThis : "Select the pomme and the cornichon on the assiettes",
    selector : "assiette :only-child",
    syntax: ":only-child",
    help : "You can select any element that is the only element inside of another one.",
    examples : [
      '<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.'
    ],
    boardMarkup : `
    <assiette>
      <pomme/>
    </assiette>
    <assiette>
      <cornichon />
    </assiette>
    <boite>
      <cornichon />
    </boite>
    <assiette>
      <orange class="petite"/>
      <orange/>
    </assiette>
    <cornichon class="petite"/>
    `
  },
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Select the last element inside of another element",
    doThis : "Select the petite pomme and the cornichon",
    selector : ".petite:last-child",
    syntax: ":last-child",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> sélectionne tous les éléments last-child elements.',
      '<strong>span:last-child</strong> sélectionne tous les éléments last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
    boardMarkup : `
    <assiette id="coloree">
      <pomme class="petite"/>
    </assiette>
    <assiette/>
    <assiette>
      <orange class="petite"/>
      <orange>
    </assiette>
    <cornichon class="petite"/>`
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis : "Select the 3rd assiette",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    boardMarkup : `
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette id="coloree"/>
    `
  },
  {
    selectorName: "Nth Last Child Selector",
    helpTitle: "Select an element by its order in another element, counting from the back",
    doThis : "Select the 1st boite",
    selector : "boite:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> sélectionne tous les éléments second-to-last child elements.'
    ],
    boardMarkup: `
    <assiette/>
    <boite/>
    <assiette>
      <orange/>
      <orange/>
      <orange/>
    </assiette>
    <boite/>
    `
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Select the first element of a specific type",
    doThis : "Select first pomme",
    selector : "pomme:first-of-type",
    syntax: ":first-of-type",
    help : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
    ],
    boardMarkup: `
    <orange class="petite"/>
    <pomme/>
    <pomme class="petite"/>
    <pomme/>
    <pomme class="petite"/>
    <assiette>
      <orange class="petite"/>
      <orange/>
    </assiette>
    `
  },
  {
    selectorName: "Nth of Type Selector",
    doThis: "Select all even assiettes",
    selector: "assiette:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> sélectionne tous les éléments odd instances of a the example class.'
    ],
    boardMarkup : `
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette id="coloree"/>
    <assiette/>
    `
  },
  {
    selectorName: "Nth-of-type Selector with Formula",
    doThis: "Select every 2nd assiette, starting from the 3rd",
    selector: "assiette:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    boardMarkup : `
    <assiette/>
    <assiette>
      <cornichon class="petite" />
    </assiette>
    <assiette>
      <pomme class="petite" />
    </assiette>
    <assiette/>
    <assiette>
      <pomme />
    </assiette>
    <assiette/>
    `
  },
  {
    selectorName: "Only of Type Selector",
    helpTitle: "Select elements that are the only ones of their type within of their parent element",
    selector : "pomme:only-of-type",
    syntax: ":only-of-type",
    doThis : "Select the pomme on the middle assiette",
    help : "Selects the only element of its type within another element.",
    examples : [
      '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
    ],
    boardMarkup: `
    <assiette id="coloree">
      <pomme class="petite" />
      <pomme />
    </assiette>
    <assiette>
      <pomme class="petite" />
    </assiette>
    <assiette>
      <cornichon />
    </assiette>
    `
  },
  {
    selectorName: "Last of Type Selector",
    helpTitle: "Select the last element of a specific type",
    doThis : "Select the last pomme and orange",
    selector : ".petite:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="petite"/>
    <orange class="petite" />
    <cornichon />
    <cornichon />
    <pomme class="petite" />
    <pomme class="petite" />
    `
  },
  {
    selectorName: "Empty Selector",
    helpTitle: "Select elements that don't have children",
    doThis : "Select the empty boites",
    selector : "boite:empty",
    syntax: ":empty",
    help : "Selects elements that don't have any other elements inside of them.",
    examples : [
      '<strong>div:empty</strong> sélectionne tous les éléments empty <tag>div</tag> elements.'
    ],
    boardMarkup:`
    <boite/>
    <boite>
      <cornichon class="petite"/>
    </boite>
    <assiette/>
    <boite/>`
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elements that don't match the negation selector",
    doThis : "Select the big pommes",
    selector : "pomme:not(.petite)",
    syntax: ":not(X)",
    help : 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#coloree)</strong> sélectionne tous les éléments elements that do not have <strong>id="coloree"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> sélectionne tous les éléments elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <assiette id="coloree">
      <pomme class="petite" />
    </assiette>
    <assiette>
      <pomme />
    </assiette>
    <pomme />
    <assiette>
      <orange class="petite" />
    </assiette>
    <cornichon class="petite" />
    `
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Select the items for someone",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples : [
      '<strong>a[href]</strong> sélectionne tous les éléments <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>[type]</strong> sélectionne tous les éléments elements that have a <strong>type="anything"</strong>. attribute'
    ],
    boardMarkup:`
    <boite><pomme class="petite"/></boite>
    <pomme for="Ethan"/>
    <assiette for="Alice"><cornichon/></assiette>
    <boite for="Clara"><orange/></boite>
    <cornichon/>`
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis : "Select the assiettes for someone",
    selector : "assiette[for]",
    syntax: "A[attribute]",
    help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    examples : [
      '<strong>[value]</strong> sélectionne tous les éléments elements that have a <strong>value="anything"</strong> attribute.',
      '<strong>a[href]</strong> sélectionne tous les éléments <tag>a</tag> elements that have a <strong>href="anything"</strong> attribute.',
      '<strong>input[disabled]</strong> sélectionne tous les éléments <tag>input</tag>strong> elements with the <strong>disabled</strong> attribute'
    ],
    boardMarkup:`
    <assiette for="Sarah"><cornichon/></assiette>
    <assiette for="Luke"><pomme/></assiette>
    <assiette/>
    <boite for="Steve"><orange/></boite>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Select all elements that have a specific attribute value",
    doThis : "Select Vitaly's meal",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> sélectionne tous les éléments checkbox input elements.'
    ],
    boardMarkup:`
    <pomme for="Alexei" />
    <boite for="Albina"><pomme /></boite>
    <boite for="Vitaly"><orange/></boite>
    <cornichon/>
    `
  },
  {
    selectorName: "Attribute Starts With Selector",
    helpTitle: "Select all elements with an attribute value that starts with specific characters",
    doThis : "Select the items for names that start with 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear</strong> or <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <assiette for="Sam"><cornichon/></assiette>
    <boite for="Sarah"><pomme class="petite"/></boite>
    <boite for="Mary"><orange/></boite>
    `
  },
  {
    selectorName: "Attribute Ends With Selector",
    helpTitle: "Select all elements with an attribute value that ends with specific characters",
    doThis : "Select the items for names that end with 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> sélectionne tous les éléments images display a <strong>.jpg</strong> image.',
    ],
    boardMarkup:`
    <pomme class="petite"/>
    <boite for="Hayato"><cornichon/></boite>
    <pomme for="Ryota"></pomme>
    <assiette for="Minato"><orange/></assiette>
    <cornichon class="petite"/>
    `
  },
  {
    selectorName: "Attribute Wildcard Selector",
    helpTitle: "Select all elements with an attribute value that contains specific characters anywhere",
    syntax: '[attribute*="value"]',
    doThis : "Select the meals for names that contain 'obb'",
    selector : '[for*="obb"]',
    help : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> sélectionne tous les éléments image selements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> sélectionne tous les éléments elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <boite for="Robbie"><pomme /></boite>
    <boite for="Timmy"><cornichon /></boite>
    <boite for="Bobby"><orange /></boite>
    `
  }
];
