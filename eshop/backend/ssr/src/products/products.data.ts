import { categories } from 'src/categories/categories.data';
import { Product } from 'src/shared/interfaces/product.interface';

export const products: Product[] = [
  {
    title: 'Rekili Weacci Dryasu',
    slug: 'Rekili-Weacci-Dryasu',
    shortDesc:
      'Reveň vysazujeme na slunná místa do hluboce zkypřené a řádně vyhnojené půdy',
    description:
      "Tuto vytrvalou rostlinu však můžeme pěstovat i v polostínu; na takových místech však dává pozdnější sklizeň než na slunných místech. Nejlépe se reveni daří na hlinitých a dostatečně vlhkých půdách. Na lehčích půdách dává ranější sklizeň, vyžaduje však současně více závlahy. Půdu pro výsadbu reveně zrigolujeme do hloubky 50 cm, vyhnojíme chlévským hnojem (10 kg/m2) a průmyslovými hnojivy (např. Cereritem 100 g/m2). Ve sponu 1×1 m vysazujeme oddělky od starších plodných trsů. Z povolených odrůd se u nás pěstuje 'Jara'. Oddělek, který má mít aspoň 3 kořeny, vysadíme tak, aby vegetační vrchol byl zhruba 5 cm pod povrchem půdy. Vysazujeme zpravidla v říjnu, což umožní, aby sazenice ještě do zimy zakořenily a na jaře začaly brzy růst. Proti vymrznutí můžeme vysazené rostliny chránit přes zimu přikrývkou slamnatého hnoje nebo rašelinou. V místech s většími mrazy je lépe ponechat výsadbu až na jaro.",
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 87 },
    seo: {
      title: 'Rekili Weacci Dryasu | Zahradnictví u Juliuse',
      description:
        'Reveň vysazujeme na slunná místa do hluboce zkypřené a řádně vyhnojené půdy',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Kicahe Ikeraj Lurgis',
    slug: 'Kicahe-Ikeraj-Lurgis',
    shortDesc: 'Zelený chřest má proti bilému četné přednosti.',
    description:
      "Pazoušky zeleného chřestu, který se pěstuje bez hrůbkování, jsou jemné, mají vyšší obsah vitaminů a při kuchyňské úpravě se nemusí tak dlouho vařit. Pro tento způsob pěstování jsou vhodnějši zahraniční odrůdy 'Arlette', 'Sláva Brunšviku', 'Sněhová koule', 'Mary Washington', 'Rany Argenteuilský' a výnosná 'Viola'. Pěstováné je ve srovnání s bilým chřestem jednodušši. Jednoleté až dvouleté sazenice se vysazuji na zrigolované a dobře vyhnojené záhony do mělkých brázdiček do hloubky 5-8 cm. Řady postači vzdálené od sebe 1,10-1,25 m; v řadách sázíme na 40 cm. Zelený chřest můžeme pěstovat i na těžších hlinitých půdách. Pazoušky chřestu sklízíme až třetí rok po výsadbě, když dosáhnou výšky 15-20 cm. Odřezáváme je nožem těsně u země. Sklizeň zeleného chřestu bývá o týden ranějši než u bilého chřestu. Urychlení a zvýšeni sklizně můžeme dosáhnout pod průhlednou fólií.",
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 159,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 50 },
    seo: {
      title: 'Kicahe Ikeraj Lurgis | Zahradnictví u Juliuse',
      description: 'Zelený chřest má proti bilému četné přednosti.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Noorpe Abwooz Adurom',
    slug: 'Noorpe-Abwooz-Adurom',
    shortDesc: 'Mátu ponecháváme na jednom stanovišti jen tři roky.',
    description:
      "Mátu (odrůdy 'Multimentha' a 'Perpeta') pěstujeme na záhonech ve slunných polohách z oddělků starších rostlin. Oddělky vysazujeme mělce v polovině dubna do řádků vzdálených od sebe 40 cm, v řádcích na 20-30 cm. Půda, nejlépe lehčí nebo středně těžká, má být dobře zásobena humusem a živinami. Během vegetace vyžaduje máta hodně půdní vláhy, a proto je nutná častá zálivka. Nať se seřezává několik centimetrů nad zemí, a to v prvním roce jen jednou ročně, v dalších letech 2-3krát ročně, vždy před květem. Listy otrháme a sušíme na stinném a vzdušném místě. Pro kořenění masitých pokrmů používáme čerstvé listy. Protože máta není zcela zimovzdorná, musíme ji v místech chudých na sníh chránit nejlépe přikrývkou z chvojí, slamnatého hnoje nebo listí.",
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 67 },
    seo: {
      title: 'Noorpe Abwooz Adurom | Zahradnictví u Juliuse',
      description: 'Mátu ponecháváme na jednom stanovišti jen tři roky.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Fryois Guanch Sepati',
    slug: 'Fryois-Guanch-Sepati',
    shortDesc: 'U nás lze artyčoky pěstovat jen v nejteplejších polohách.',
    description:
      'U nás lze artyčoky pěstovat jen v nejteplejších polohách. Tato až 1,5 m vysoká rostlina, podobná ušlechtilému bodláku, se u nás pěstuje jen velmi zřídka. Její 8-10 cm velké, dosud nerozkvetlé květní hlavice jsou velkou lahůdkou. Artyčoky jsou citlivé na mráz. Proto je lze s úspěchem pěstovat především ve slunných a chráněných polohách. Artyčoky pěstujeme ze sazenic, které získáme v dubnu oddělením od starších trsů. Sazenice vysazujeme na záhon zrigolovaný do hloubky 50 cm a dobře vyhnojený chlévským hnojem nebo kompostem a Cereritem (60 g/m?). Sázíme do jamek 20-30 cm hlubokých, zčásti vyplněných kompostem tak, aby sazenice byly 10 cm hluboko; spon volíme 80x80 cm až 100x100 cm. Sazenice si můžeme vypěstovat i ze semen, která vysejeme počátkem března po 2-3 do hrnků a umístíme ve vytápěném skleniku nebo pařeništi.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 209,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 55 },
    seo: {
      title: 'Fryois Guanch Sepati | Zahradnictví u Juliuse',
      description: 'U nás lze artyčoky pěstovat jen v nejteplejších polohách.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Dahosi Jaymou Zonsma',
    slug: 'Dahosi-Jaymou-Zonsma',
    shortDesc:
      'Listy libečku se používají ke kořenění polévek, omáček a k masu.',
    description:
      "Listy libečku se používají ke kořenění polévek, omáček a k masu. Používají také k průmyslové výrobě tekutého koření do polévek. Libeček nejlépe roste na hlubokých, středně těžkých půdách. Snáší i polostín. Pro kuchyňskou potřebu nám postačí na zahrádce 1-2 rostliny. Na jaře vysadíme buď oddělky starých trsů, nebo sazenice vypěstované ze semen ve sponu 50x50 cm. Semeno vysejeme již v srpnu předchozího roku na výsevný záhon do řádků tak, aby rostlinky po vyjednocení byly ve sponu 20x8 cm. Tak získáme dostatek silných sazenic. Listy sklízíme postupně během celého roku. Libeček je vytrvalá rostlina odolná proti mrazu. Proto může zůstat na jednom místě několik let. Aby každoročně vytvořil bohatou nať, přihnojujeme ho na jaře kompostem a Cereritem. Důležité je i vápněni. Aby se rostliny nevyčerpávaly tvorbou semen, vyřezáváme květní lodyhy hned na počátku jejich vývoje. Povolená odrůda je 'Magnus'.",
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 19,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 94 },
    seo: {
      title: 'Dahosi Jaymou Zonsma | Zahradnictví u Juliuse',
      description:
        'Non vel expedita dolor quis voluptate dignissimos aspernatur dolorem.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Raropa Adyndi Itarif',
    slug: 'Raropa-Adyndi-Itarif',
    shortDesc: 'Řeřichu zahradní lze používat po celý rok ke kořenění pokrmů',
    description:
      "Řeřicha je vhodná ke kořenění salátů, obložených chlebíčků a masitých pokrmů. Pěstování této u nás málo známé zeleniny je v západních a severských státech běžné. Řeřicha má velmi krátkou vegetační dobu, pouze 10-20 dní od zasetí do sklizně natě. Na záhonech ji pěstujeme od poloviny března do konce října nebo začátku listopadu. V letním období rychle vybíhá do květu a její užitkovost je malá. Také chuť v létě je velmi ostrá. Na půdu není řeřicha náročná. Semeno povolené odrůdy 'Dánská' vyséváme na záhony nebo na obruby po předchozim utužení půdy prkénkem do řádků vzdalených od sebe 10 cm a do hloubky 1-2 cm. Po výsevu povrch půdy opět utužíme.",
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 30 },
    seo: {
      title: 'Raropa Adyndi Itarif | Zahradnictví u Juliuse',
      description:
        'Řeřichu zahradní lze používat po celý rok ke kořenění pokrmů',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Tweetr Nifist Laciel',
    slug: 'Tweetr-Nifist-Laciel',
    shortDesc: 'Tymián vyžaduje slunnou a chráněnoy polohu',
    description:
      "Tymián vyžaduje slunnou a chráněnoy polohu a lehči půdu bohatou živinami a vápníkem Odrůdy tymiánu 'Aroma', 'Mixta 'Lemona' (má citronovou vůni) pěstujeme dělením starých trsů, odrůdu 'Krajový' ze sazenic, které vypěstujeme v pařeništi (semeno vyséváme v březnu až dubnu). Sazenice vysazujeme na záhon ve sponu 30x15 cm, a to vždy 2-3 rostliny do jednoho důlku. Sázíme hlouběji, než byly rostliny v pařeništi, aby lépe zakořenily. Tymián můžeme pěstovat i jako obrubníkovou rostlinu; nesmí však být zastíněný. Nať tymiánu sklízíme v dalších letech dvakrát až tříkrát. Nesmíme ho sestřihávat příliš u země, aby zase dobře obrašil. Nesmíme jej sklízet ani pozdě na podzim, neboť pak by již špatně obrostl a snadno by přes zimu vymrzl. Nejpozdější lhůta sklizně je proto polovina září. Nať sušíme zavěšenou v malých svazcích nebo rozprostřenou na lískách na stinném a suchém místě. Používáme ji do čajů proti kašli. Syrový tymián lze použít jako přísadu do salátů. Přes zimu chráníme tymián v místech, kde není dostatek sněhu, přikrývkou z chvojí proti vymrznutí. Na jednom místě ponecháváme tymián 4-5 let. Na jaře jej každoročně přihnojíme kompostem a Cereritem.",
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 189,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 17 },
    seo: {
      title: 'Tweetr Nifist Laciel | Zahradnictví u Juliuse',
      description: 'Tymián vyžaduje slunnou a chráněnoy polohu',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Sulatl Etamec Zygich',
    slug: 'Sulatl-Etamec-Zygich',
    shortDesc: 'Černý kořen je u nás dosud málo pěstovaná',
    description:
      'Černý kořen je u nás dosud málo pěstovaná zelenina Černý kořen, který má neobvyklý botanický název – hadí mord španělský, je vytrvalá hvězdnicovitá rostlina, vytvářející v prvním roce pěstování 20-30 cm dlouhý kořen (často i delší) s černou pokožkou a bílou dužninou, z níž po naříznutí vytéká bílá mlékovitá tekutina jako z kořenů pampelišky. Květní lodyhy se žlutými květenstvími vyrůstají při normálním vývoji až ve druhém roce, někdy však již v prvním roce. Černý kořen je jemná a lehce stravitelná zelenina. Proto je vhodný pro žaludečni nebo střevní dietu. Doporučuje se též pro nemocné cukrovkou a revmatismem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 76 },
    seo: {
      title: 'Sulatl Etamec Zygich | Zahradnictví u Juliuse',
      description: 'Černý kořen je u nás dosud málo pěstovaná',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Hybdin Orlato Eculmi',
    slug: 'Hybdin-Orlato-Eculmi',
    shortDesc: 'Mrkev je velmi zdravá pro svůj vysoký obsah karotenu',
    description:
      'Mrkev patří mezi zeleniny bohaté karotenem (provitamin A), který velmi příznivě ovlivňuje výměnu látkovou v těle, přispívá k dobré činnosti srdce, sliznic, žláz a oční sítnice. Posiluje také odolnost těla proti infekčním chorobám. Vitaminy komplexu B obsažené v mrkvi spolupůsobí při ochraně nervů. Šťáva z mrkve podávaná malým dětem působí proti průjmům. Nejhodnotnější je mrkev požívaná za syrova (jemně rozmixovaná je nejúčinnější).',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 73 },
    seo: {
      title: 'Hybdin Orlato Eculmi | Zahradnictví u Juliuse',
      description: 'Mrkev je velmi zdravá pro svůj vysoký obsah karotenu',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fogion Pughte Ozorti',
    slug: 'Fogion-Pughte-Ozorti',
    shortDesc: 'Ředkev má podobné nároky na pěstování jako ředkvíčka',
    description:
      "Ředkev, která příznivě ovlivňuje trávení a používá se i při kašli, má proti ředkvičce větší bulvy (zejména zimní odrůdy) a potřebuje k jejich plnému vývinu delší dobu. Pro pěstování na jaře se koncem března nebo začátkem dubna používají rané odrůdy s kuželovitými kořeny – 'Polodlouhá bílá', žlutá 'Jantar' a červená 'Karmina'. Vysévají se na záhony do řádků vzdálených od sebe 20 cm, do hloubky 2 cm. Jednotí se na vzdálenost 8 cm. Lze je vysévat i v srpnu pro podzimní sklizeň. Pro delší uložení na zimu se v červenci | vysévá pozdní odrůda 'Kulatá černá' do řádků širokých 30 cm, a jednotí se na 12-15 cm. Šťáva této odrůdy s cukrem se doporučuje proti dětskému kašli. Pro mimořádně velké a kvalitní bulvy se pěstují tzv. japonské ředkve, např. 'Aspro' (až 40 cm dlouhá). Záhony před výsevem pohnojíme Cereritem, popřípadě superfosfátem a siranem draselným, po vyjednocení mírně ledkem vápenatým. Dávky hnojiv použijeme obdobné jako k ředkvičce. Během vegetace záhony s ředkví okopáváme a zavlažujeme.",
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 589,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 6 },
    seo: {
      title: 'Fogion Pughte Ozorti | Zahradnictví u Juliuse',
      description: 'Ředkev má podobné nároky na pěstování jako ředkvíčka',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Unbranded Fresh Fish',
    slug: 'Unbranded-Fresh-Fish',
    shortDesc:
      'Iure qui maxime quisquam et unde dolores deleniti in provident.',
    description:
      'At vitae facere. Commodi corporis animi aperiam exercitationem sequi. Et eveniet officiis non et illo quisquam mollitia sit rerum. Sed dolorem repellat ex et dolor. Molestiae dolorem vero. Maxime soluta sint.\n \rItaque iure esse nemo sit rerum voluptatibus ut dolor molestiae. Commodi voluptatem voluptatum tempore velit quia non eligendi. Perferendis sint laudantium expedita animi quia tenetur sit quia.\n \rAtque voluptates repudiandae necessitatibus et. A ut odio placeat animi tempore dolor. Maiores earum amet quos. A eaque soluta consequatur qui. Dolores maiores odio. Ut sequi soluta qui repellat voluptas dolore.\n \rUt laborum molestiae cumque vero. Laborum dicta temporibus eum neque. Odio incidunt voluptatem dolore delectus officia voluptas aut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 33 },
    seo: {
      title: 'Unbranded Fresh Fish | Zahradnictví u Juliuse',
      description:
        'Iure qui maxime quisquam et unde dolores deleniti in provident.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Generic Cotton Pizza',
    slug: 'Generic-Cotton-Pizza',
    shortDesc:
      'Perspiciatis provident sit eum laborum corporis provident dignissimos quaerat aut.',
    description:
      'At esse et. Aut dolores nulla quo nisi et nulla consequatur. Rerum corporis delectus aut.\n \rQuam alias recusandae delectus repellendus omnis voluptas. Aut et deleniti in. Nulla placeat doloribus exercitationem delectus. Quod qui optio sint neque officia quisquam enim accusamus. Eveniet odio dolores temporibus veritatis et eos omnis labore autem.\n \rCum dignissimos quos voluptatum. Veniam vel praesentium laboriosam consequuntur pariatur. Rerum minus deserunt. Illo quos quam autem at. Dignissimos harum sed voluptatibus possimus quas.\n \rSed quibusdam sit soluta optio et aut at iusto officia. Accusamus ipsam iusto. Ut voluptates voluptate. Qui nisi quod est eveniet qui delectus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 8 },
    seo: {
      title: 'Generic Cotton Pizza | Zahradnictví u Juliuse',
      description:
        'Perspiciatis provident sit eum laborum corporis provident dignissimos quaerat aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Ergonomic Frozen Fish',
    slug: 'Ergonomic-Frozen-Fish',
    shortDesc: 'Facere mollitia velit aspernatur quibusdam quisquam earum.',
    description:
      'Dolores in mollitia ad qui voluptatibus ratione. Reiciendis eos velit nesciunt. Labore error quasi ipsam explicabo. Praesentium quos quia velit.\n \rDebitis consectetur sint cupiditate minus rem. Ea voluptatibus eligendi culpa tempora aut blanditiis excepturi sed soluta. Fugiat ipsa nemo enim consectetur hic natus. Debitis consequatur aliquam ut et officia. Quo atque aut numquam nobis at corrupti sed omnis exercitationem.\n \rAdipisci consequatur qui eveniet hic debitis dolor provident repellendus. Est atque consectetur at. Nihil a alias eligendi incidunt velit tempora autem quo eum. Maxime corrupti et. Molestias voluptas accusantium corporis.\n \rNon et rem sed. Quasi autem reiciendis cupiditate quia repellat amet eligendi. Nisi possimus adipisci aliquid. Aspernatur repellendus nam nesciunt rerum iusto. Sunt ut laborum nihil dolores porro iure soluta.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 29,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 90 },
    seo: {
      title: 'Ergonomic Frozen Fish | Zahradnictví u Juliuse',
      description: 'Facere mollitia velit aspernatur quibusdam quisquam earum.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Fantastic Rubber Gloves',
    slug: 'Fantastic-Rubber-Gloves',
    shortDesc: 'Debitis architecto dolor est.',
    description:
      'A est magnam possimus vero et asperiores vel. Voluptatem consectetur odit aut est. Blanditiis quo praesentium adipisci cumque ducimus iste vitae. Fugit odio veritatis dolorem. Similique voluptatibus fugit nihil nam fugiat non ut enim. Quae aliquam omnis repellat sint repellendus sunt.\n \rError placeat qui. Aperiam culpa sit repellendus ut quis non blanditiis non minima. Qui corporis ipsa fugit perferendis qui rerum enim pariatur deleniti. Quia voluptas repellat voluptatem aut commodi sequi quo. Eos unde id quaerat repellat est nihil natus esse. Omnis sequi eum magnam facilis animi natus perspiciatis.\n \rError est nihil et velit veniam est. Cupiditate occaecati eos mollitia. Est in alias. Dolores quo nostrum aut modi enim fugiat tempore expedita. Eum qui hic facilis.\n \rQui est nihil placeat temporibus necessitatibus voluptas illum. Iusto et corrupti debitis non ipsam consequatur et. Odit ipsum aut expedita ut et et. Quae atque aut minus dicta dolores illum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 15 },
    seo: {
      title: 'Fantastic Rubber Gloves | Zahradnictví u Juliuse',
      description: 'Debitis architecto dolor est.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Unbranded Wooden Chicken',
    slug: 'Unbranded-Wooden-Chicken',
    shortDesc: 'Ea ipsam cupiditate quibusdam quis eum temporibus.',
    description:
      'Eaque maiores natus sit. Cupiditate facere saepe id et. Porro dolor est quidem corrupti qui officia tempore. Hic voluptatem at molestiae amet possimus fuga. Quod qui labore.\n \rRepudiandae laudantium et voluptate quisquam rerum magnam. Deserunt est dolorem iure omnis laudantium exercitationem et. A saepe numquam.\n \rDolorem reiciendis qui quasi et. Voluptatem ea enim ut. Autem doloribus pariatur consequuntur ea amet hic qui. Voluptatibus et rerum quo qui accusantium sit ut molestias consequatur.\n \rLaboriosam reiciendis quod nesciunt doloremque odio commodi voluptate enim. Fuga est nihil repellat et eaque exercitationem quia officia amet. Ut quo laborum voluptatum et dolore quam provident necessitatibus repellendus. Similique sequi pariatur. Corporis magnam reprehenderit eum. Rem ut ullam voluptas odio laudantium voluptas cum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 489,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 3 },
    seo: {
      title: 'Unbranded Wooden Chicken | Zahradnictví u Juliuse',
      description: 'Ea ipsam cupiditate quibusdam quis eum temporibus.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Practical Granite Cheese',
    slug: 'Practical-Granite-Cheese',
    shortDesc: 'Deserunt quis sunt dignissimos excepturi quisquam soluta.',
    description:
      'Aut aut culpa. Unde ut ut sit architecto vel facere ea. Aperiam magni consequatur dolores quo non et commodi aperiam. Et impedit voluptatem consequatur. Tenetur numquam corrupti similique error ut.\n \rEt et dolores voluptatem sed animi quas accusantium velit est. Quia expedita dignissimos error error nulla vitae iusto ut. In ducimus eum. Similique doloremque tempora. Numquam est nihil.\n \rPlaceat natus optio repellendus ad omnis. Et est minus ullam earum molestias libero suscipit ratione saepe. Mollitia autem architecto et quasi debitis et porro.\n \rExercitationem et harum in omnis rerum quis ducimus eum. Totam iure aut ut suscipit et. Qui quos molestiae fugit nesciunt et est. Ut assumenda beatae et dolorem laboriosam. Tenetur quas laborum quo error eius distinctio consequatur qui. Dicta mollitia architecto voluptatibus rem occaecati dolor qui sed suscipit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 309,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 91 },
    seo: {
      title: 'Practical Granite Cheese | Zahradnictví u Juliuse',
      description: 'Deserunt quis sunt dignissimos excepturi quisquam soluta.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Handcrafted Steel Keyboard',
    slug: 'Handcrafted-Steel-Keyboard',
    shortDesc:
      'Similique corporis voluptatem voluptas repudiandae qui optio corrupti.',
    description:
      'Optio incidunt voluptas consequatur quas voluptatum impedit voluptatem sunt ducimus. Perferendis cum unde nulla distinctio consequatur voluptatem beatae ut iste. Et qui atque placeat.\n \rNemo mollitia est velit neque consequatur. Quo nihil dolorem repellendus ipsam atque cum. At voluptatem autem voluptate qui quia accusantium saepe id eveniet.\n \rVoluptas sunt unde non. Nihil aut quis aliquid sed vel voluptatem qui asperiores amet. Ut ea in voluptatem odit quisquam repudiandae quis.\n \rRem alias ipsam itaque fuga suscipit occaecati. Placeat laborum et quas sit modi repellat aliquam qui corporis. Non eos commodi dicta magnam sunt accusamus sed quia illum. Unde aliquam dolorem voluptates.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 479,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 5 },
    seo: {
      title: 'Handcrafted Steel Keyboard | Zahradnictví u Juliuse',
      description:
        'Similique corporis voluptatem voluptas repudiandae qui optio corrupti.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Small Metal Pizza',
    slug: 'Small-Metal-Pizza',
    shortDesc: 'Dolorem omnis molestias dolore deserunt.',
    description:
      'Est ut sit est porro qui. Quia corrupti minima omnis excepturi perferendis iure atque voluptas. Quis nobis a sed provident excepturi dolor qui quod.\n \rAliquam ut deleniti adipisci quasi ducimus sint beatae ea dolores. Eligendi exercitationem repellat nihil. Ut minima et. Nesciunt voluptatibus magnam sint minima quaerat possimus. Maiores doloremque incidunt nihil dolores modi necessitatibus vel deleniti molestias.\n \rConsequatur doloremque est ea rerum nesciunt similique. Ipsam autem voluptatum. Aut voluptatem et hic aut sint autem praesentium saepe eum. Debitis vero possimus quaerat nesciunt consectetur blanditiis. Omnis dolores neque neque.\n \rDelectus sequi qui architecto harum ut iusto excepturi magni. Sit provident soluta unde sit aut et voluptas deleniti assumenda. Atque consequatur autem est ducimus suscipit eius aut repellat. Enim expedita in. Blanditiis est corrupti. Culpa placeat sapiente.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 169,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 17 },
    seo: {
      title: 'Small Metal Pizza | Zahradnictví u Juliuse',
      description: 'Dolorem omnis molestias dolore deserunt.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Intelligent Metal Gloves',
    slug: 'Intelligent-Metal-Gloves',
    shortDesc: 'Sed voluptas vitae sit natus et illo delectus ut aut.',
    description:
      'Nobis perspiciatis placeat non ipsa laborum et. Amet ex possimus et sed et rerum qui. Maiores a sunt. Suscipit sunt voluptas cupiditate minima et qui blanditiis sequi. Rem id accusantium nulla omnis et eaque natus. Nihil recusandae culpa sed cumque consequatur.\n \rAut nostrum excepturi incidunt. Tempore laborum nostrum atque animi et. Nulla officiis odio.\n \rNobis eius totam suscipit sed officiis reiciendis quam quaerat necessitatibus. Sed totam error molestias repudiandae et architecto. Sunt consequatur aut temporibus ducimus.\n \rIpsa eos sed fugit pariatur ipsa. Numquam quo cumque autem est. Fugit est quaerat accusantium. Laborum quo sint cum. Alias ipsam ipsum recusandae velit placeat voluptatem corporis. Dolores ea id illo possimus dolores sunt magnam incidunt eos.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 90 },
    seo: {
      title: 'Intelligent Metal Gloves | Zahradnictví u Juliuse',
      description: 'Sed voluptas vitae sit natus et illo delectus ut aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Ergonomic Metal Chicken',
    slug: 'Ergonomic-Metal-Chicken',
    shortDesc: 'Perspiciatis exercitationem harum.',
    description:
      'Quia cum iste. Voluptatum id ducimus quis illo soluta. Iure recusandae et rerum ea eum. Laudantium non consequatur et beatae dolor dicta sunt perferendis. Sit est voluptas nemo voluptatem laboriosam reprehenderit. Autem incidunt cum exercitationem rerum nihil.\n \rHarum maxime qui libero necessitatibus eaque. Voluptas sint veniam libero eum libero fugiat quam ut et. Perferendis nihil voluptate quod sunt tempore molestiae excepturi. Non non dolor quia soluta. Molestias vitae nobis eos voluptatum et laudantium.\n \rDeserunt tempora nihil optio est. Facere natus esse qui laboriosam dolores impedit. Alias molestiae magni perspiciatis quia ea corrupti quibusdam sunt labore. Sit culpa rerum et repudiandae officia nulla tenetur minima. Eum amet voluptates amet maxime necessitatibus iste deleniti. Dolores qui recusandae ut repellat tenetur aliquam.\n \rLibero esse ut ipsam quia labore qui dolor quaerat. At amet ut et ratione sit quia nisi expedita. Porro ipsum esse ut ducimus et. Perferendis odio doloribus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 89,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 45 },
    seo: {
      title: 'Ergonomic Metal Chicken | Zahradnictví u Juliuse',
      description: 'Perspiciatis exercitationem harum.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Small Rubber Cheese',
    slug: 'Small-Rubber-Cheese',
    shortDesc: 'Odit sed illum id ut ipsum cumque saepe voluptatem.',
    description:
      'Sunt quasi perferendis harum iure omnis et in accusantium quia. Voluptate nihil qui enim modi et cum ut accusamus. Earum quia est adipisci aliquam omnis et qui. Ut asperiores vitae nemo. Dolorem impedit asperiores praesentium voluptas dolor maxime aut. Quos minima quia.\n \rUt sapiente quis ullam ad qui pariatur in. Eos ab corrupti dicta odio aut. Ipsum debitis placeat dolorem dolorem. Quo provident voluptatum perferendis minima tempora rem quo quidem. Consequuntur nihil et est reiciendis sunt sit veritatis non.\n \rArchitecto voluptas nulla architecto sequi laboriosam. Quis consectetur impedit fuga. Eos quasi quo eum doloribus corporis quia perferendis numquam. Sapiente eum quaerat iure molestiae est aut et reprehenderit omnis.\n \rNon voluptatem maxime eius. Modi sapiente quia aliquid ipsam fugiat est. Perspiciatis ea quibusdam in nisi nemo dolor facilis laborum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 43 },
    seo: {
      title: 'Small Rubber Cheese | Zahradnictví u Juliuse',
      description: 'Odit sed illum id ut ipsum cumque saepe voluptatem.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Handmade Plastic Towels',
    slug: 'Handmade-Plastic-Towels',
    shortDesc: 'Est quaerat repellendus ut accusantium saepe impedit optio.',
    description:
      'Tenetur voluptatibus commodi qui officia rerum molestias. Rerum est quod a recusandae necessitatibus et aut in quos. Et asperiores et.\n \rMolestiae recusandae ut repellat perferendis commodi aut consequatur cumque sint. Odit itaque omnis labore voluptatum. Eius harum voluptatem. Id unde et dolorem quis.\n \rExercitationem veritatis voluptas. Sint sunt voluptatem nemo deserunt nostrum qui dolores nisi molestiae. Laborum quisquam dicta suscipit similique quis earum et. Quae voluptas odit omnis facere ipsam unde iure repellat non. Exercitationem et nam rerum non quod autem est sapiente et. Expedita minima error.\n \rDolorem vel cum et placeat aliquam ex aperiam. Necessitatibus nulla voluptatem recusandae consequatur eum omnis eos non. Laboriosam aut numquam eius enim. Qui qui dolorem error voluptatem ipsa tempora nam velit qui. Et fugiat id recusandae et qui maxime sequi porro. Rerum ut atque dolores consequuntur nihil.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 479,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 42 },
    seo: {
      title: 'Handmade Plastic Towels | Zahradnictví u Juliuse',
      description:
        'Est quaerat repellendus ut accusantium saepe impedit optio.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Intelligent Plastic Car',
    slug: 'Intelligent-Plastic-Car',
    shortDesc: 'Animi qui sit ut.',
    description:
      'At et quos est aut ut qui unde. Eos perferendis distinctio consectetur numquam autem magni libero quis rem. Sapiente ea blanditiis at hic vel occaecati quia. Assumenda necessitatibus architecto veritatis esse minima eum sequi. Tempora itaque quia fuga laudantium.\n \rRepellendus nemo maxime in adipisci vitae occaecati sit reiciendis. Est distinctio aliquam necessitatibus occaecati atque numquam cum. Ratione ut placeat aut voluptas molestiae voluptas voluptas similique.\n \rFugit delectus ut quia possimus commodi quam. Corrupti est laboriosam odit nihil ratione est omnis consequatur ut. Inventore ea eum voluptas voluptatibus debitis vel unde.\n \rLaudantium temporibus illo et voluptates. In occaecati et ut eos blanditiis nemo. Nostrum expedita maxime adipisci ut ut sint tempora. Deserunt nihil porro praesentium ea quo odio. Impedit esse non.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 19 },
    seo: {
      title: 'Intelligent Plastic Car | Zahradnictví u Juliuse',
      description: 'Animi qui sit ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Ergonomic Rubber Sausages',
    slug: 'Ergonomic-Rubber-Sausages',
    shortDesc: 'Consectetur molestiae vero dolore qui sed ex qui.',
    description:
      'Corrupti asperiores sit odio molestias temporibus aspernatur alias deleniti porro. Nobis modi sit sint officia nihil occaecati et sequi sint. Eius neque voluptate et iste doloribus.\n \rNihil ut nobis voluptas eius. Quia voluptate dolorem aperiam ut est. Qui consequatur vel qui omnis eos eum aut.\n \rOdio eius molestias magni velit dignissimos alias dolores. Non et quo ipsum illum. Aut perferendis animi quis ipsa omnis.\n \rVoluptas necessitatibus et et id voluptatem. Voluptatem aperiam totam delectus nihil sequi quia. Non est et esse. Et provident ad recusandae esse. Soluta debitis ipsum aperiam tempore natus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 56 },
    seo: {
      title: 'Ergonomic Rubber Sausages | Zahradnictví u Juliuse',
      description: 'Consectetur molestiae vero dolore qui sed ex qui.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Handmade Frozen Bacon',
    slug: 'Handmade-Frozen-Bacon',
    shortDesc:
      'Dolorem quas voluptas fugiat et doloribus consequatur provident a dolorum.',
    description:
      'Sed laborum occaecati quia ipsum. Maiores fuga repellat quae. Repellat iste fugit velit et magnam. Voluptas sint ut.\n \rLaboriosam est ut cum vel vel et ratione et dolorem. Similique laborum aspernatur beatae. Non veritatis minus quaerat at et iste est. Repellat quia rerum minus ipsa nemo laborum repellendus. Iusto ut quis.\n \rAssumenda cupiditate deserunt tempora aut harum rerum et. Fugit harum ut beatae veritatis quia illum ex reprehenderit possimus. Minus quae quod totam.\n \rDolorem omnis in voluptatem doloribus blanditiis cum officia. Voluptatem sit dolores rerum autem non numquam vero occaecati saepe. Numquam aliquid qui et et alias. Et tenetur qui eos optio.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 15 },
    seo: {
      title: 'Handmade Frozen Bacon | Zahradnictví u Juliuse',
      description:
        'Dolorem quas voluptas fugiat et doloribus consequatur provident a dolorum.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fantastic Cotton Hat',
    slug: 'Fantastic-Cotton-Hat',
    shortDesc: 'Ut vero accusantium magni illum modi.',
    description:
      'Explicabo occaecati provident quidem odit et perferendis molestiae ea. Odio reprehenderit et sunt alias ut fuga quisquam labore. Nihil tempora quo quasi enim animi tenetur. Est aliquid repellendus alias. Neque accusantium id quis architecto quis. Occaecati eaque magni ipsum.\n \rBeatae tenetur qui beatae voluptatem ea facilis. Necessitatibus ipsa est qui magnam dolorem. Dolor nulla delectus quidem qui voluptatem cum itaque. Distinctio quia quo. Laudantium dolorum ipsum rerum occaecati. Saepe et ipsum.\n \rUnde praesentium cumque et inventore illo corporis inventore velit. Laborum molestiae ut minima laudantium. Vero dicta voluptatem. Sequi consequatur a vel repellendus. Sed soluta autem tenetur ullam ipsam fugit qui quae neque.\n \rExercitationem error aperiam quaerat. Deserunt quam odio consequuntur eos aspernatur et voluptatem recusandae. Voluptas quo ullam accusantium hic veritatis nam. Accusantium voluptas doloribus eaque nihil ut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 549,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 16 },
    seo: {
      title: 'Fantastic Cotton Hat | Zahradnictví u Juliuse',
      description: 'Ut vero accusantium magni illum modi.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Sleek Fresh Cheese',
    slug: 'Sleek-Fresh-Cheese',
    shortDesc: 'Aut quis tempora.',
    description:
      'Hic et et corrupti distinctio modi ut sunt maiores sed. Dolorem dolorem nulla consequatur nisi ea. Velit nostrum labore vitae quaerat. Mollitia saepe consectetur omnis odio dolor enim rerum recusandae corporis. A optio nostrum.\n \rMagni occaecati enim deserunt veniam odio dolores sed dolorum et. Tempora vero exercitationem non est. Mollitia eius officiis iste molestiae quis. Sapiente fuga vero ut in qui adipisci deserunt veritatis voluptatem.\n \rEsse saepe ratione iure occaecati velit quisquam et alias. Earum aliquam modi doloremque repellendus rerum perspiciatis ipsa. Ipsa qui eos et et qui et inventore. Omnis rerum ut vel qui sint eum. Quo necessitatibus dolorem mollitia accusamus excepturi similique neque mollitia odit.\n \rHic tempora nemo debitis necessitatibus qui. Aut libero fugiat aut occaecati dolores similique temporibus. Autem dignissimos laudantium quis ad in. Ipsam placeat aliquam nulla quas. Cum quia suscipit cumque et. Tenetur laborum cum praesentium vel.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 17 },
    seo: {
      title: 'Sleek Fresh Cheese | Zahradnictví u Juliuse',
      description: 'Aut quis tempora.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Concrete Towels',
    slug: 'Sleek-Concrete-Towels',
    shortDesc: 'Impedit praesentium cumque est et et vitae.',
    description:
      'Beatae voluptates dolorem expedita. Nulla qui ratione optio. Voluptatibus quibusdam voluptatem minus sint nihil delectus et nihil. Molestiae ut ratione amet rem mollitia atque necessitatibus perferendis.\n \rNon asperiores sed quos blanditiis vero perspiciatis illo ut. Aut libero nihil quam quis dignissimos eligendi. Excepturi sequi sed. Cum blanditiis facilis nulla autem ut porro optio quia rerum. Qui et sunt consequatur. Ullam eos laborum.\n \rAnimi soluta fugiat similique aspernatur optio nobis maxime autem hic. Eos reiciendis suscipit commodi omnis ut quia. Et voluptatum maiores velit libero natus eum est. Aut sed veniam. Quia quia repudiandae voluptates ut sint cumque ut consequuntur sunt.\n \rSed eos veniam libero quis in. Quasi consequuntur qui omnis quaerat voluptates quidem minima deleniti. Illum unde et natus aliquid. Eaque optio voluptatem quae exercitationem mollitia blanditiis autem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 22 },
    seo: {
      title: 'Sleek Concrete Towels | Zahradnictví u Juliuse',
      description: 'Impedit praesentium cumque est et et vitae.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Fresh Soap',
    slug: 'Sleek-Fresh-Soap',
    shortDesc: 'Qui autem natus provident vel ut expedita.',
    description:
      'Voluptatum quia quasi. Sequi velit consequatur dolorum dolores rerum eum et est eum. Tempora molestiae vel facilis.\n \rVel tenetur dolorem possimus eum molestias suscipit quia accusantium et. Fugiat ea quo et. Vero qui ea provident porro harum possimus. Doloribus laboriosam alias odio debitis perferendis rerum ducimus.\n \rVoluptates exercitationem magni aperiam sint iure numquam at ad ab. Qui consequatur est sed quas minima nisi sunt vero. Distinctio sunt eum nihil ratione ex doloribus doloremque. Aut et voluptate eaque ut suscipit facere. Aut dolores ut.\n \rOmnis officiis consectetur perferendis non rem est. Commodi quidem velit pariatur eos consequuntur adipisci. Voluptas voluptatem repellat ut ut aut ex quia deserunt occaecati. Velit minus temporibus voluptas necessitatibus aut est fugiat dicta. Ducimus qui iste molestias est laudantium inventore et. Minus error labore itaque expedita.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 19,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 88 },
    seo: {
      title: 'Sleek Fresh Soap | Zahradnictví u Juliuse',
      description: 'Qui autem natus provident vel ut expedita.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Cotton Shoes',
    slug: 'Rustic-Cotton-Shoes',
    shortDesc: 'Labore quod rerum nostrum quas velit deleniti atque aperiam.',
    description:
      'Sint quod quis illo aspernatur ea dolor quis ut. Exercitationem aut ipsum nihil tempora. Voluptas saepe debitis quia tempora ipsam quibusdam. Eos est aliquam perferendis quia. Sed repudiandae repudiandae qui corrupti consequatur.\n \rNesciunt commodi eveniet sed alias omnis eos impedit. Pariatur vero qui. Nisi facilis beatae consequatur cumque doloribus id autem ex. In perferendis officia quia iusto.\n \rHic nulla magni est inventore facilis. Cumque et cupiditate. Magnam et aut doloremque non cumque maxime omnis.\n \rPariatur nihil laborum quae eum eum dicta ex nihil aliquam. Doloremque dolorem dolorem hic qui est et suscipit. Quo similique et officia voluptatem nulla sint sint mollitia sint. Ut qui consectetur.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 169,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 75 },
    seo: {
      title: 'Rustic Cotton Shoes | Zahradnictví u Juliuse',
      description:
        'Labore quod rerum nostrum quas velit deleniti atque aperiam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Steel Chicken',
    slug: 'Handcrafted-Steel-Chicken',
    shortDesc: 'Velit possimus ratione.',
    description:
      'Quia omnis natus nulla repellendus consequuntur. Fuga temporibus porro. Amet repellat quasi. Et et necessitatibus in. Pariatur corporis saepe sed tempora eius ex accusantium eum. Necessitatibus repellat blanditiis error tenetur aut nam blanditiis et.\n \rNon numquam atque ea doloribus pariatur quibusdam corrupti optio. Ut quae assumenda ratione vero magnam nam. Dicta et quia minus dolores. Quaerat sequi voluptas amet. Quia et sint accusantium qui itaque dolorem laborum quia.\n \rAccusantium ducimus ab nihil ut. Laudantium quia ut optio eaque sunt nesciunt adipisci beatae ut. Ad omnis quaerat ipsam.\n \rVelit ex iste est cum cum totam ea quisquam. Mollitia perferendis et iusto recusandae voluptatem quisquam velit. Quia placeat facilis tempora rem. Voluptatibus rerum deleniti aut odit accusamus. Repudiandae tenetur praesentium sed eaque modi vitae est amet iure. Praesentium quia corrupti fuga asperiores officia.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 299,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 78 },
    seo: {
      title: 'Handcrafted Steel Chicken | Zahradnictví u Juliuse',
      description: 'Velit possimus ratione.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Small Frozen Chips',
    slug: 'Small-Frozen-Chips',
    shortDesc:
      'Sit aut eius occaecati deleniti velit repellendus ducimus incidunt iste.',
    description:
      'Magni temporibus ducimus minus officiis nihil vitae ad dolores enim. Nulla eos sint aut voluptate. Consequatur et ex ut minima. Iusto sit ipsum molestiae.\n \rAut eligendi dolorem doloribus exercitationem aut est illum mollitia. Qui enim nihil qui soluta provident qui. Dolorum perferendis sed rem. Voluptas ipsum nihil asperiores aut. Quaerat ea aliquam voluptatibus velit voluptas nam. Ipsum facere quo nam suscipit atque.\n \rEt totam rerum quia quia. Sit aspernatur veniam tempore nisi qui rerum distinctio qui. Labore incidunt culpa. Iste consequuntur rerum et repudiandae accusantium. Maiores quia et dolorum natus facilis quos nisi voluptates. Delectus consequuntur velit rerum error assumenda aspernatur quia.\n \rRerum tempora ut dolores pariatur aut beatae sapiente. Aut culpa iusto vel suscipit earum aspernatur. Quisquam autem et quis soluta ea a nostrum autem. Ut odio modi quos illo.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 349,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 17 },
    seo: {
      title: 'Small Frozen Chips | Zahradnictví u Juliuse',
      description:
        'Sit aut eius occaecati deleniti velit repellendus ducimus incidunt iste.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Wooden Keyboard',
    slug: 'Practical-Wooden-Keyboard',
    shortDesc: 'Aliquid quas occaecati est sed.',
    description:
      'Impedit cum aut. Officia maiores vel. Sed consequuntur odio recusandae autem aspernatur corrupti. Non eum minima placeat qui tenetur quia.\n \rEarum nostrum ut aut sequi atque adipisci veniam. Dolorum tempora explicabo consequatur est ut. Et in vel est temporibus blanditiis. Et laboriosam soluta sequi nesciunt porro cupiditate aspernatur.\n \rEos ut assumenda qui ad incidunt quia saepe. Qui perferendis ea voluptatum et aut debitis aspernatur animi qui. Amet pariatur exercitationem nostrum. Quo quo nihil velit aut reiciendis. Numquam est ipsum occaecati et.\n \rQuo et facere ut. Aliquam veniam fugit tempora minima voluptatum minus. Beatae recusandae ducimus fugit voluptatem consequuntur nobis amet. Quia voluptatem quaerat. Voluptatum veniam omnis voluptas sint quasi voluptatem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 479,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 15 },
    seo: {
      title: 'Practical Wooden Keyboard | Zahradnictví u Juliuse',
      description: 'Aliquid quas occaecati est sed.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Intelligent Soft Shirt',
    slug: 'Intelligent-Soft-Shirt',
    shortDesc: 'Autem quaerat quidem iure reiciendis vero qui eveniet.',
    description:
      'Ipsum iusto asperiores. Et ut modi minima quis consectetur. Et quae dolores. Similique quis ex et corrupti eum eligendi et sapiente.\n \rConsequatur rerum laborum alias pariatur amet. Libero harum est magni asperiores beatae labore adipisci. Doloribus recusandae libero consequatur non et ipsam consectetur illo et. Ducimus odio est rem blanditiis quia doloribus totam fugit. Sed eius sint.\n \rFugiat maxime voluptatibus similique odio similique doloribus. Deserunt velit non occaecati facere nobis. Ut quia labore ad eos et omnis.\n \rId necessitatibus est magni deleniti voluptatum ipsa atque eos fugiat. Eligendi optio et blanditiis velit ut et dolor eos et. Sed consequuntur consequuntur nihil dignissimos.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 84 },
    seo: {
      title: 'Intelligent Soft Shirt | Zahradnictví u Juliuse',
      description: 'Autem quaerat quidem iure reiciendis vero qui eveniet.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Licensed Metal Car',
    slug: 'Licensed-Metal-Car',
    shortDesc: 'Temporibus fuga qui.',
    description:
      'Quia provident deserunt maxime quisquam qui. Quasi nostrum ullam. Non impedit ratione velit et debitis maiores delectus vel doloribus. Rerum et rerum maxime quisquam. Deserunt nemo id tempore nihil sapiente nisi consectetur. Error dolores magnam.\n \rVoluptate fuga quibusdam blanditiis unde quibusdam fuga. Possimus sapiente quia. Et eos eum sed neque laboriosam tempore dolor. Totam officia officia aut eaque velit error.\n \rDoloribus sit adipisci asperiores occaecati nobis quas. Earum nemo rerum minima eius quas inventore a incidunt cupiditate. Aliquid aut quo odit sint ratione officia aliquid. Rerum accusantium quaerat alias qui numquam sunt. Veniam ut est sed molestiae minus esse. Excepturi provident reiciendis dolores et nemo dolor quasi.\n \rDolor officia consequatur. Quibusdam et nihil ut nemo. Quis quasi dolores rerum veritatis laboriosam est quae eos.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 299,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 37 },
    seo: {
      title: 'Licensed Metal Car | Zahradnictví u Juliuse',
      description: 'Temporibus fuga qui.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Awesome Concrete Fish',
    slug: 'Awesome-Concrete-Fish',
    shortDesc: 'Et cum aut sit officiis assumenda enim aliquam quaerat.',
    description:
      'Dolore ut aut dicta alias quibusdam. Ducimus eveniet voluptas veritatis. Ratione harum aut est nihil maxime saepe.\n \rFacere est magni unde expedita dolor. Rerum aperiam nihil. Numquam sint vel totam consequuntur molestiae sit iure. Mollitia atque voluptatem dicta autem sit totam. Possimus omnis consequatur.\n \rAnimi occaecati libero dignissimos incidunt minus ullam. Nihil corporis veniam ducimus vel. Quam doloremque pariatur in qui minus.\n \rEst cumque perferendis veritatis cupiditate qui perferendis reiciendis. Ratione illo impedit ea dolorem eius repellendus et voluptate. Placeat maiores eveniet necessitatibus itaque unde delectus voluptate.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 87 },
    seo: {
      title: 'Awesome Concrete Fish | Zahradnictví u Juliuse',
      description: 'Et cum aut sit officiis assumenda enim aliquam quaerat.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Metal Hat',
    slug: 'Handcrafted-Metal-Hat',
    shortDesc: 'Quis est sed et rerum harum doloremque et.',
    description:
      'Nulla sequi corrupti deserunt quia est voluptatum totam. Veritatis nobis aut. Ut autem sit quae qui et molestiae. A praesentium iste atque voluptas. Eligendi accusantium accusantium temporibus fugit rerum non. Non laborum doloremque in.\n \rIn corrupti culpa cumque praesentium neque aut rerum dolor. Atque qui animi eum et excepturi ut asperiores autem rerum. Vel labore eos delectus sit et sunt quia. Numquam dolores nam beatae et vitae natus. Beatae consequuntur est velit id ipsum aut et ducimus quis. Vel soluta quis.\n \rMagni est molestiae numquam vero. Ab id ut. Vel architecto nam omnis in voluptatem voluptas pariatur. Ducimus ipsam ex sapiente autem.\n \rOfficia itaque atque laudantium non vero ea veniam delectus. Et qui dolor dolorem aliquid. Ut ut et nemo accusantium tempore ut eaque. Et temporibus deserunt at corrupti numquam in.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 55 },
    seo: {
      title: 'Handcrafted Metal Hat | Zahradnictví u Juliuse',
      description: 'Quis est sed et rerum harum doloremque et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Fantastic Fresh Cheese',
    slug: 'Fantastic-Fresh-Cheese',
    shortDesc: 'Fuga rerum praesentium voluptas repellendus ut vitae omnis.',
    description:
      'Aliquam aspernatur fuga veritatis et quo. Molestiae pariatur veniam animi dicta molestiae aut. Provident odit eligendi sequi similique dolorem. Dolores architecto et aut officiis ut et voluptatem. Suscipit qui et. Aut omnis vel alias est praesentium quaerat omnis ut aliquam.\n \rAutem odio voluptatem dolorem explicabo. Qui non aspernatur a occaecati non vero earum praesentium. Quo aut voluptatem natus est adipisci sunt alias.\n \rQuo aut in fugiat qui officia cupiditate. Quo aut et doloribus nihil. Adipisci praesentium eligendi sunt nihil non alias. Sunt libero veritatis iure ipsam et impedit magnam. Nemo sint quia aperiam molestiae dicta quasi voluptatem quo. Animi dolor explicabo nulla sed est deserunt rem.\n \rEt facere libero. Et cupiditate aliquam rem. Eveniet eaque et laudantium et. Sequi dolores in non. Molestias autem voluptatem at dolor rerum id eum quibusdam. Qui nostrum molestias ut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 20 },
    seo: {
      title: 'Fantastic Fresh Cheese | Zahradnictví u Juliuse',
      description:
        'Fuga rerum praesentium voluptas repellendus ut vitae omnis.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Ergonomic Granite Cheese',
    slug: 'Ergonomic-Granite-Cheese',
    shortDesc: 'Molestiae eum et delectus aut optio accusantium mollitia.',
    description:
      'Ipsum laboriosam minima qui officiis inventore. Sed qui est sed libero aperiam similique et itaque. Odit mollitia sequi rerum voluptas quo. Consequatur eos recusandae.\n \rUt blanditiis quia vel consequatur. Cupiditate modi asperiores fugit fugiat maxime. Et placeat natus earum at illum.\n \rCommodi cumque ad atque non. Illo ipsum totam quod necessitatibus sunt doloribus enim et facilis. Voluptas consequatur voluptas vero blanditiis non. Quis quis molestias quia aut sed. Nulla eos minus.\n \rSuscipit provident quia sed eum ipsam ratione quas suscipit. Nemo et maxime et ut dicta accusantium atque et. Culpa neque vel ullam. Autem deleniti fugiat ea.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 72 },
    seo: {
      title: 'Ergonomic Granite Cheese | Zahradnictví u Juliuse',
      description: 'Molestiae eum et delectus aut optio accusantium mollitia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handcrafted Steel Fish',
    slug: 'Handcrafted-Steel-Fish',
    shortDesc: 'Itaque nobis itaque hic.',
    description:
      'Quo est nam. Voluptas dolore veniam ut. Quasi error non voluptas quam expedita numquam aut consequuntur consectetur. Ea qui et.\n \rAnimi a facere et. Sit quisquam aliquam non cum magnam hic deserunt. Velit ratione ea soluta quaerat vel error.\n \rSunt provident eum odit deserunt aut excepturi. Recusandae rerum aliquid impedit fugiat asperiores velit. Sit explicabo et nobis. Non voluptatem quia harum aut quasi magnam. Modi quo doloribus harum omnis dolores. Est aut dolor qui aut ex iste corporis.\n \rLabore eveniet aperiam voluptatem deleniti eius. Aspernatur natus quod. Voluptatem pariatur adipisci illum. Minima ipsa omnis aut dolor eum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 219,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 84 },
    seo: {
      title: 'Handcrafted Steel Fish | Zahradnictví u Juliuse',
      description: 'Itaque nobis itaque hic.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Sleek Granite Car',
    slug: 'Sleek-Granite-Car',
    shortDesc: 'Possimus aperiam voluptate nemo est et quia.',
    description:
      'Sint reprehenderit reprehenderit minima. Sed et consequatur. Voluptatem voluptas molestiae facilis rerum iusto earum dolore inventore eos.\n \rNemo facilis quo deleniti ullam tempora. Iste soluta ea et quos eum neque ipsum. Dignissimos et magni maiores beatae fuga nam vel.\n \rMagni aut qui laudantium minus. Labore nobis temporibus totam. Asperiores et provident ut enim corporis natus tempore maxime. Sed et doloribus.\n \rConsequatur voluptatem et odio accusantium. In ipsum dolorem porro laudantium. Saepe voluptatem voluptatem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 49 },
    seo: {
      title: 'Sleek Granite Car | Zahradnictví u Juliuse',
      description: 'Possimus aperiam voluptate nemo est et quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Generic Frozen Fish',
    slug: 'Generic-Frozen-Fish',
    shortDesc: 'Adipisci quis in quasi iusto facere velit.',
    description:
      'Nihil hic fugiat aut quasi fugit maxime nihil enim. Ullam modi laudantium libero porro eaque et. Eum quis molestiae et ipsam. Quibusdam similique dolorem iste perspiciatis voluptatum totam tempore ab placeat. Similique voluptates voluptas corrupti. Maiores delectus dolorum sed.\n \rAt maiores quae doloribus autem esse impedit ut rerum. Blanditiis quaerat maiores. Ullam ipsa aspernatur.\n \rLaudantium esse eos et dicta aut illo. Itaque quisquam laudantium eos molestiae autem odio. Optio voluptas facere voluptate. Et nobis placeat nesciunt libero. Et expedita atque eos dignissimos quia aut iure fugiat commodi. Sint iusto eveniet voluptas cum impedit qui consequuntur quisquam.\n \rEaque voluptatem assumenda esse quisquam sit possimus aut est dicta. Explicabo consectetur optio dolor vero eos vel quia provident. Est molestias et sunt omnis adipisci tempora dicta sit ullam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 90 },
    seo: {
      title: 'Generic Frozen Fish | Zahradnictví u Juliuse',
      description: 'Adipisci quis in quasi iusto facere velit.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Tasty Cotton Shirt',
    slug: 'Tasty-Cotton-Shirt',
    shortDesc: 'Aut sint sed nam mollitia qui iste.',
    description:
      'Fugiat rerum omnis tenetur consequatur soluta dignissimos. Vitae beatae amet itaque. Nulla repellat odio recusandae veritatis voluptatibus magni eveniet qui. Et aliquam ullam praesentium omnis sequi aliquam non in facere.\n \rReiciendis aut nihil repellendus. Consectetur perferendis ullam. Modi alias ea facere tenetur veniam modi.\n \rSapiente voluptate aspernatur consequatur similique rem quia quod temporibus voluptas. Voluptas commodi perferendis vel non omnis quasi cupiditate iste. Dolores magnam excepturi voluptatem voluptas quidem asperiores similique dolores. Nobis accusamus nostrum quia et velit. Molestiae nesciunt ullam consectetur qui non beatae saepe sed. Nulla sit consectetur explicabo consequatur et ratione cupiditate.\n \rQuis voluptates ea doloribus voluptatem officia inventore voluptatum soluta velit. Esse totam nisi molestias. Ea placeat voluptatem pariatur eaque omnis asperiores incidunt. Non maxime non illum totam. Rerum aliquid earum magni excepturi consequatur. Qui adipisci dolore iusto vel.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 429,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 7 },
    seo: {
      title: 'Tasty Cotton Shirt | Zahradnictví u Juliuse',
      description: 'Aut sint sed nam mollitia qui iste.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Ergonomic Metal Gloves',
    slug: 'Ergonomic-Metal-Gloves',
    shortDesc: 'Repellendus voluptates facilis.',
    description:
      'Distinctio in nobis asperiores dolore labore eos quam et. In ullam necessitatibus aut excepturi. Accusantium omnis et est fugit itaque et.\n \rVel exercitationem et est similique. Inventore ut et est fugit. Voluptas aut minima. Officia saepe maxime. In possimus tenetur ipsam aut veritatis laudantium impedit hic eligendi.\n \rSunt quibusdam dicta optio corrupti laborum odit dolorem. Delectus nam eos occaecati praesentium laudantium et quidem voluptatem quae. Itaque consequatur quam delectus sit sunt. Dolores voluptas pariatur assumenda quasi vel voluptatem esse deleniti aperiam. Odit provident ipsam voluptas quo harum nostrum nisi harum rerum. Illum accusantium exercitationem ut asperiores.\n \rQuidem aperiam voluptates minima amet odit. Placeat sequi tenetur. Non et ea consequuntur. Dicta repellendus voluptas.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 9 },
    seo: {
      title: 'Ergonomic Metal Gloves | Zahradnictví u Juliuse',
      description: 'Repellendus voluptates facilis.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Handmade Metal Pizza',
    slug: 'Handmade-Metal-Pizza',
    shortDesc: 'Molestiae et assumenda consequatur eum non.',
    description:
      'Et sint ad voluptates molestias illo iste aut. Dicta provident veritatis aperiam. Quidem ut eius est quia. Et labore alias. Aliquid beatae cupiditate sit assumenda soluta velit sit provident excepturi.\n \rDebitis aut facere sunt neque voluptas ut. Deserunt pariatur est. Mollitia modi corporis aliquid sunt. Omnis sit debitis in cum fugit assumenda tempore quia.\n \rLabore similique et. Id earum quis rem labore. Commodi tempore autem quibusdam voluptas. Odio dolorum inventore sapiente. Rerum quia earum et magnam perspiciatis eum ut exercitationem doloribus.\n \rSed voluptas officia magni unde pariatur eum sed possimus. Porro minima quo nobis asperiores. Alias et magni.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 119,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 38 },
    seo: {
      title: 'Handmade Metal Pizza | Zahradnictví u Juliuse',
      description: 'Molestiae et assumenda consequatur eum non.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Soft Hat',
    slug: 'Practical-Soft-Hat',
    shortDesc: 'Voluptatum omnis id.',
    description:
      'Cupiditate provident voluptas et provident esse reprehenderit ex. Aliquid qui eligendi consequatur. Laudantium perspiciatis ad.\n \rNihil ex laboriosam facilis ea occaecati dignissimos corrupti. Veniam repudiandae quaerat eveniet earum aut delectus praesentium qui et. Mollitia dolores sapiente non ducimus nostrum enim necessitatibus quia commodi. Ut voluptas ab rerum eum ratione eligendi voluptas totam accusamus.\n \rA numquam tenetur sed quo aut autem ut temporibus optio. Commodi aut et. Voluptatem porro exercitationem sit. Accusamus asperiores labore fuga aut eos. Assumenda tempora recusandae ea qui voluptas. Et sed eos delectus.\n \rAb unde nihil quia quis exercitationem porro quibusdam assumenda ipsam. Dolorem iste rerum voluptas sit consectetur. Neque voluptas consectetur ut. Qui placeat et provident pariatur deserunt quidem consequuntur.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 549,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 29 },
    seo: {
      title: 'Practical Soft Hat | Zahradnictví u Juliuse',
      description: 'Voluptatum omnis id.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fantastic Granite Car',
    slug: 'Fantastic-Granite-Car',
    shortDesc: 'Possimus dignissimos assumenda et.',
    description:
      'Qui est qui rerum. Enim nihil tenetur consequatur ducimus voluptas maiores. Sed reiciendis excepturi est facilis quos cumque animi officia.\n \rOfficiis est mollitia dolores. Quia minima a aut minima voluptates corrupti. Exercitationem sint omnis. In ad eligendi velit.\n \rMinus laborum dicta distinctio consectetur autem voluptates. Sunt voluptatem quia. Temporibus voluptas dolor voluptatum. Consequatur dolorem et nam dolorem. Cum nihil voluptas quae quaerat nemo possimus ad omnis. Placeat reiciendis incidunt quia possimus mollitia voluptas repudiandae.\n \rQui excepturi sed cupiditate. Blanditiis sit veniam fugiat officia debitis amet sunt sit expedita. Commodi quis tenetur et omnis quis. In aut sequi iste nihil pariatur. Sint illum debitis officia voluptatibus et dignissimos. Explicabo consectetur veritatis sit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 469,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 28 },
    seo: {
      title: 'Fantastic Granite Car | Zahradnictví u Juliuse',
      description: 'Possimus dignissimos assumenda et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Steel Sausages',
    slug: 'Practical-Steel-Sausages',
    shortDesc: 'Fugiat provident ipsam aut sed saepe nihil culpa est quia.',
    description:
      'Ut dolorem voluptatem aperiam aut voluptates numquam nihil et. Quia ipsam ut nemo minima dolores impedit dolores odit. Autem tenetur debitis itaque provident quidem sequi dolore. Quod aliquid quo odit occaecati accusantium hic vero molestiae. Placeat est quisquam veniam deleniti nostrum et blanditiis voluptas. Voluptatem sint consequatur debitis earum consequatur ut consequatur placeat optio.\n \rSit porro reprehenderit. Qui itaque non animi molestiae. Accusantium corrupti sint temporibus ullam.\n \rSunt asperiores ipsum. Quo aliquam ut nobis fugit ea tenetur aut aperiam. Soluta voluptatem fugiat aut inventore vitae. Eaque vero at hic voluptate magnam et rerum ad consequatur.\n \rAut ipsam ad consectetur porro. Quo vel aut eaque. Quisquam neque fugit soluta consequatur esse dolore ratione totam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 259,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 19 },
    seo: {
      title: 'Practical Steel Sausages | Zahradnictví u Juliuse',
      description: 'Fugiat provident ipsam aut sed saepe nihil culpa est quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Licensed Rubber Ball',
    slug: 'Licensed-Rubber-Ball',
    shortDesc: 'Saepe voluptate rem dolorum hic ut sed esse ratione maxime.',
    description:
      'Quidem quidem est aut ea. Eligendi nihil ut nemo occaecati aut quia sequi. Optio consequatur corrupti quia aut.\n \rMollitia suscipit animi similique itaque. Recusandae sunt et quod. Iusto quas corrupti expedita harum accusantium qui fuga impedit.\n \rLaudantium sed temporibus dolor laudantium recusandae. Velit accusamus qui molestias fugit placeat in. Placeat dolorum quae rerum ut ea similique.\n \rMagnam id perspiciatis ipsa optio consequatur accusantium laborum ut sint. In est sunt sit quas eius culpa. Quaerat nesciunt aut. Iure perferendis cupiditate saepe quam qui. Rerum vel nostrum fugiat eligendi quo vero.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 99,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Licensed Rubber Ball | Zahradnictví u Juliuse',
      description:
        'Saepe voluptate rem dolorum hic ut sed esse ratione maxime.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Wooden Sausages',
    slug: 'Practical-Wooden-Sausages',
    shortDesc: 'In eum ipsa sed.',
    description:
      'Qui aut sunt distinctio quia repellendus quia qui vel et. Voluptate eos necessitatibus veniam. Voluptates voluptas quod rem. Nemo voluptatem earum in sint deleniti id. Pariatur quia et. Sint veritatis laboriosam et sed doloremque enim dolorem.\n \rVitae laborum aperiam necessitatibus molestiae est. Atque quia reprehenderit cum harum nostrum est voluptatibus dolor. Aut voluptas aut laboriosam eligendi illo. Debitis deserunt ex sapiente totam nihil magni. Labore quia maiores. Dolores ipsum quia et eius sit eos et.\n \rQui praesentium nostrum natus ex maiores non nostrum eveniet nihil. A libero delectus est. Eius beatae ad neque magni. Veniam autem corrupti quia impedit ratione voluptates illum.\n \rSoluta sed aut ut consequatur id laudantium rerum. Quaerat molestiae natus vero veniam sequi atque. Illo sint autem vel consequatur aut sit eos veniam voluptatem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 99,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 30 },
    seo: {
      title: 'Practical Wooden Sausages | Zahradnictví u Juliuse',
      description: 'In eum ipsa sed.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Tasty Plastic Tuna',
    slug: 'Tasty-Plastic-Tuna',
    shortDesc: 'Molestiae et rerum sit exercitationem.',
    description:
      'Non quis et et labore. Voluptatem et rerum inventore voluptates est voluptatum. Eum et totam dolor. Suscipit veniam praesentium voluptas. Consequatur quia quasi aperiam illum doloremque et.\n \rNeque qui consequatur. Labore unde assumenda nesciunt. Qui dolorum adipisci sequi. Vel necessitatibus quis cupiditate atque assumenda et ad aut. Qui et quisquam dolorem.\n \rEa molestiae ea ullam. Eveniet doloribus fugiat et voluptatem ut blanditiis. Harum ex iste dolores et. Consequuntur placeat est et ullam id accusamus molestiae.\n \rArchitecto possimus sed aut deserunt nemo velit expedita nostrum. Rerum earum aut ullam. Vitae praesentium voluptatem et. Earum autem aut voluptate iste omnis id culpa ratione. Nulla non aliquid reiciendis facere. Aut nisi et ut illum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 409,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 11 },
    seo: {
      title: 'Tasty Plastic Tuna | Zahradnictví u Juliuse',
      description: 'Molestiae et rerum sit exercitationem.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Licensed Rubber Table',
    slug: 'Licensed-Rubber-Table',
    shortDesc: 'Amet voluptatibus aperiam voluptas dolores.',
    description:
      'Consequatur dolores quia at possimus dolores assumenda. Aspernatur pariatur hic. Ipsum in rerum assumenda reprehenderit nostrum aliquam. Doloremque accusantium nemo perspiciatis repellendus blanditiis rem nam et.\n \rSint modi assumenda ab eum vero vero. Voluptatibus esse sequi distinctio quo natus qui tempore cum ipsa. Nisi corporis rerum qui in. Molestias est dicta. In a occaecati consequatur accusamus eos molestias. Sunt repudiandae asperiores suscipit animi optio.\n \rAlias laudantium non magnam enim odio. Aspernatur nihil veniam quia iusto ratione vitae fugiat nesciunt officiis. Eum dolor magnam dolores ut rerum est. Nulla voluptatibus accusantium voluptate.\n \rEa vero dolores quis veritatis. Maxime commodi unde sint aliquam porro dolore voluptatem numquam. Magnam autem excepturi consequatur cupiditate dolores sit occaecati aut vel. Dolor quidem voluptates voluptas ab quis pariatur. Omnis aut expedita esse unde rerum ducimus. Repellendus reiciendis velit et vel similique cum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 65 },
    seo: {
      title: 'Licensed Rubber Table | Zahradnictví u Juliuse',
      description: 'Amet voluptatibus aperiam voluptas dolores.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Awesome Metal Shoes',
    slug: 'Awesome-Metal-Shoes',
    shortDesc: 'Aliquam ut consequatur.',
    description:
      'Velit quae quam totam in ea. Harum exercitationem natus quis facere accusamus. Et sunt reprehenderit aut molestiae et qui. Doloremque ipsa quisquam et ipsa veritatis minus maxime voluptate vel.\n \rTemporibus laborum et. Libero velit earum placeat sapiente aliquid similique. Repellendus enim nostrum aliquid consequatur non.\n \rNisi nihil sit. Vitae sint consectetur illum in non saepe. Non id nesciunt ut cum voluptatem. Est dolorem ut impedit sint.\n \rAperiam doloremque magni accusantium molestiae et veniam et. Autem amet quis quia eaque sunt debitis in. Id in dolor nostrum ullam et eos quia numquam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 27 },
    seo: {
      title: 'Awesome Metal Shoes | Zahradnictví u Juliuse',
      description: 'Aliquam ut consequatur.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Soft Pizza',
    slug: 'Incredible-Soft-Pizza',
    shortDesc: 'Rerum dolor soluta.',
    description:
      'Quia repellat voluptas accusamus commodi est et officia reprehenderit quidem. Quasi repellendus est. Beatae dolores maxime autem cupiditate sunt iusto iure magnam aut. Molestias ut tempora voluptas qui quod voluptatem fugiat doloremque tenetur.\n \rRerum aperiam amet. Atque consequuntur consequatur molestiae. Id quis sit ducimus animi. Officia ab voluptatum sit natus provident. A optio adipisci unde ea asperiores quis velit qui omnis. Et occaecati ut.\n \rRerum molestias sit suscipit aut autem. Qui in aut sint eveniet qui eum ex et. Dolorem recusandae porro. Qui dolorum modi. Id ab accusantium qui et quo iste omnis sed.\n \rIllo quia voluptates mollitia dolorem perspiciatis blanditiis placeat et. Quia pariatur minima aut soluta odio rerum est. Eos tempore cum. Impedit ut officia ut eos.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 489,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 52 },
    seo: {
      title: 'Incredible Soft Pizza | Zahradnictví u Juliuse',
      description: 'Rerum dolor soluta.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Fantastic Fresh Fish',
    slug: 'Fantastic-Fresh-Fish',
    shortDesc: 'Quod eum voluptates.',
    description:
      'Molestiae explicabo beatae sit aspernatur. Aut doloribus modi voluptatum veritatis. Cum unde animi corrupti.\n \rEst in assumenda ut consequatur adipisci qui ad nemo. Culpa minus quas. Et et eligendi placeat. Enim rerum necessitatibus placeat. Eum delectus omnis eos rerum et sint quia harum.\n \rArchitecto adipisci soluta. Quisquam saepe et soluta molestiae sint. Facere rerum ea. Et eum non debitis necessitatibus dolor.\n \rAliquam repellendus soluta et tenetur voluptatem deserunt animi quod totam. Odio et voluptate. Porro asperiores nihil repudiandae autem. Et fugit in impedit. Cumque atque quod eum odit saepe.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 329,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 21 },
    seo: {
      title: 'Fantastic Fresh Fish | Zahradnictví u Juliuse',
      description: 'Quod eum voluptates.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Fantastic Cotton Chicken',
    slug: 'Fantastic-Cotton-Chicken',
    shortDesc: 'Explicabo ut sed.',
    description:
      'Quis dolor perspiciatis aut enim expedita sint. Suscipit rerum aut qui et. Doloribus quod nulla doloremque. Ut quia qui blanditiis.\n \rAutem reprehenderit minima. Iure quos hic inventore accusantium. Id vel qui et consequatur inventore. Consequuntur voluptas tempore ea quis ea.\n \rVoluptatem sapiente aperiam enim. Est delectus molestiae a neque iste ipsam. Laborum possimus magnam omnis officiis ex consectetur.\n \rDeserunt ratione nemo molestias ut aut ut dolore. Expedita eligendi consequuntur consequuntur a voluptatem quam excepturi et. Debitis aut voluptatem et quam est ut dolores minima. Animi autem id delectus temporibus neque fugit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 599,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 30 },
    seo: {
      title: 'Fantastic Cotton Chicken | Zahradnictví u Juliuse',
      description: 'Explicabo ut sed.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Incredible Rubber Towels',
    slug: 'Incredible-Rubber-Towels',
    shortDesc:
      'Eligendi omnis ut exercitationem voluptatum laborum alias beatae.',
    description:
      'Rem tenetur fugit vitae numquam numquam. Aspernatur consequatur sunt error qui voluptas. Ea repellat dolores.\n \rOfficiis mollitia omnis dolore voluptas est labore vel est. Neque quo repellendus culpa inventore iste eaque occaecati numquam. Pariatur ab libero accusantium maiores vitae asperiores. Porro facilis sapiente quaerat molestiae vel ut. Facere aspernatur consequatur. Et est nihil modi perferendis sed.\n \rQuasi ut minima veniam fuga nam. Et cum aut. Nihil nihil totam. Sint ut sint optio ad dolores saepe neque qui.\n \rEt molestias quo labore voluptatibus fugiat occaecati sed fugiat. Ea voluptatem ullam ab fugit sunt aut. Animi et maxime eos quam. Laudantium modi odio qui nisi molestias eveniet voluptatem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 219,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 22 },
    seo: {
      title: 'Incredible Rubber Towels | Zahradnictví u Juliuse',
      description:
        'Eligendi omnis ut exercitationem voluptatum laborum alias beatae.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Ergonomic Concrete Gloves',
    slug: 'Ergonomic-Concrete-Gloves',
    shortDesc: 'Nesciunt consequatur quis vero vitae molestiae ut.',
    description:
      'Eligendi laborum qui sint. Molestias aut suscipit accusamus enim. Vel dolorum et sed.\n \rVoluptas aut earum eaque deserunt quis rerum soluta. Facilis eaque et non eaque accusantium nam officiis qui suscipit. Aut impedit eius unde ea saepe ut aut quo harum. Eligendi et hic iste soluta aut magni accusamus iste. Sunt eligendi neque et nisi dolor.\n \rExercitationem in inventore ex dolorum aperiam aut. Dignissimos qui dolorem maxime tempora et officia reiciendis eum. Odio et eaque illum repellendus velit natus vel ut mollitia.\n \rArchitecto quo soluta hic optio asperiores facilis sint asperiores molestias. Qui eaque doloremque fugiat sed sit. Voluptatem quisquam eos dolorem id omnis sit. Provident et eaque soluta. Alias architecto qui est sequi vitae exercitationem error.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 87 },
    seo: {
      title: 'Ergonomic Concrete Gloves | Zahradnictví u Juliuse',
      description: 'Nesciunt consequatur quis vero vitae molestiae ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Soft Salad',
    slug: 'Sleek-Soft-Salad',
    shortDesc: 'Et cum harum assumenda.',
    description:
      'Voluptatum ea velit veniam molestias dolorum. Quaerat aut ad repellendus quaerat aut dolores et laboriosam magnam. Aut velit enim molestiae. Nihil ex doloribus fuga. Rem impedit et aut excepturi non quod ut placeat.\n \rEst mollitia eius eum ullam occaecati. Sapiente maiores non consectetur eaque nobis et. Ut qui est. Rerum porro non consequatur expedita repellendus.\n \rQuia consequatur accusamus autem est atque suscipit aut consequuntur repellat. Quidem beatae vel optio et unde. Unde quae explicabo veritatis vel animi minus culpa cumque. Rem voluptas sint deleniti.\n \rEaque ut laboriosam est nihil in et. Quia ut omnis mollitia deserunt rerum. Perferendis accusamus sint voluptatem atque qui sit dolores. Dicta vel tempore non.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 519,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 76 },
    seo: {
      title: 'Sleek Soft Salad | Zahradnictví u Juliuse',
      description: 'Et cum harum assumenda.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Handcrafted Rubber Car',
    slug: 'Handcrafted-Rubber-Car',
    shortDesc: 'Et excepturi quia autem facere quia aperiam.',
    description:
      'Omnis et animi reiciendis neque dolores. Placeat est nisi earum fuga neque et voluptatem modi nemo. Reprehenderit occaecati dolores. Voluptatibus sequi quasi facere. Maxime rerum delectus aut et non. Cupiditate molestiae possimus voluptates.\n \rCommodi molestiae voluptate voluptatem debitis reiciendis voluptatem sint accusantium et. Exercitationem esse dolores optio nam ex. Facere modi magnam placeat omnis ut incidunt aut velit. Vero perferendis minus tempore. Illum possimus maxime.\n \rVitae eligendi ut dignissimos itaque. Voluptate aperiam fugiat exercitationem aut et velit est vel. Soluta dicta quia ullam explicabo odio autem sit. Rerum omnis porro harum quasi porro voluptatem velit. Voluptatem illo eaque consequatur voluptas incidunt officiis eos. Vero possimus omnis facilis veniam et.\n \rQui quia est. Ducimus fuga voluptate reprehenderit rem. Aspernatur et non dicta repellat aut illo. Est qui quae a.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 29,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 83 },
    seo: {
      title: 'Handcrafted Rubber Car | Zahradnictví u Juliuse',
      description: 'Et excepturi quia autem facere quia aperiam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Awesome Granite Salad',
    slug: 'Awesome-Granite-Salad',
    shortDesc: 'Sunt quod magni.',
    description:
      'Aut laudantium rerum rerum sed occaecati iusto quisquam. Rem eaque quos ipsa ipsa recusandae. Et quia aut illo.\n \rEx reprehenderit consequuntur ab veritatis fuga fuga quidem. Et ut repellat voluptatem quos dolores et tempora odio. Laudantium explicabo unde est ab vitae quo nobis aut. Ut non praesentium adipisci nam. Eius enim placeat cupiditate. Ratione libero qui eaque et dolores ut inventore.\n \rSapiente et aut ipsa quis sit. Illo non est voluptas dicta autem. Aliquam repellat placeat voluptatum. Incidunt eos alias unde. Cum vitae qui vel.\n \rQui iste inventore. Voluptas quo modi. Modi eum et quam aspernatur suscipit. Perspiciatis adipisci in incidunt saepe non ea assumenda velit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 599,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 3 },
    seo: {
      title: 'Awesome Granite Salad | Zahradnictví u Juliuse',
      description: 'Sunt quod magni.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Ergonomic Cotton Bike',
    slug: 'Ergonomic-Cotton-Bike',
    shortDesc: 'Odio necessitatibus molestias et ut.',
    description:
      'Accusamus et eligendi eos. Qui velit sit sit. Deserunt aut nostrum iure.\n \rAutem culpa voluptas qui adipisci sapiente. Et praesentium in totam et. Aperiam et magni voluptates temporibus.\n \rQuis fugiat reprehenderit enim dolores eum totam saepe. Nostrum tempore temporibus. Incidunt voluptatem temporibus nemo. Ullam distinctio pariatur repudiandae nesciunt consectetur sit recusandae iure.\n \rEst temporibus aliquam occaecati expedita labore culpa. Earum eveniet voluptatibus ab itaque in non quibusdam. Praesentium amet asperiores impedit consequuntur rerum nemo minus neque necessitatibus. Et excepturi et animi aut voluptates.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 87 },
    seo: {
      title: 'Ergonomic Cotton Bike | Zahradnictví u Juliuse',
      description: 'Odio necessitatibus molestias et ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handmade Soft Pants',
    slug: 'Handmade-Soft-Pants',
    shortDesc: 'Et asperiores non sit quis et totam.',
    description:
      'Amet possimus aut sit vel ullam qui quia corporis sed. Error dolor voluptatem illo. Deleniti nostrum nesciunt eligendi ut nihil voluptatem ex est natus.\n \rAdipisci velit aut numquam natus tempore. Ad autem recusandae explicabo ea rerum assumenda atque dolorem. Error quam qui est dolorem rerum eos. Qui et qui delectus dicta maiores architecto. Repellendus eveniet aut culpa cumque.\n \rMagnam veniam vero. Amet sint maxime consequatur. Iure molestias facere illum. Ratione excepturi vero.\n \rUt qui id ut quas sunt beatae. Laborum asperiores reiciendis rerum illum ex est. Ducimus ex harum voluptatem odit commodi laudantium. In vero quia excepturi totam velit. Deleniti qui qui odio cum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 56 },
    seo: {
      title: 'Handmade Soft Pants | Zahradnictví u Juliuse',
      description: 'Et asperiores non sit quis et totam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Tasty Wooden Bacon',
    slug: 'Tasty-Wooden-Bacon',
    shortDesc: 'Nobis sequi omnis corporis laborum nobis nisi.',
    description:
      'Iure voluptatem soluta expedita et dolores vel. Veritatis repudiandae quam et et debitis nostrum voluptates dignissimos. Aspernatur qui quasi consequatur voluptatum optio quo omnis. Animi nihil deleniti adipisci neque. Consequuntur dolor esse magnam. Est et in beatae eos ut.\n \rTenetur animi illum veniam. Voluptatem qui cupiditate illum nesciunt iusto qui nostrum pariatur eveniet. Occaecati ab vero assumenda. Sint est voluptatem necessitatibus quibusdam consequuntur dolores quae perspiciatis. Vel perferendis veniam omnis qui quas.\n \rVoluptatibus sit similique et. Velit nam et quas ratione modi facilis. Quia occaecati est sed. Quia impedit nobis. Magnam repudiandae fugit soluta tempora. Est quam quae aut earum ea adipisci iusto et.\n \rEt laboriosam ipsum nihil est ut non cupiditate veritatis quasi. Et sint voluptatum fugit similique consequuntur facere ut commodi. Illo natus nihil quidem similique. Enim eum quo illo quae corrupti quo assumenda sunt aspernatur.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 609,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 93 },
    seo: {
      title: 'Tasty Wooden Bacon | Zahradnictví u Juliuse',
      description: 'Nobis sequi omnis corporis laborum nobis nisi.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Handcrafted Soft Cheese',
    slug: 'Handcrafted-Soft-Cheese',
    shortDesc:
      'Labore aperiam aliquid labore voluptatem earum rem dignissimos.',
    description:
      'Blanditiis labore deleniti eaque necessitatibus eum. Exercitationem quis in deleniti inventore. Et assumenda illum ut molestias dolores. Aut ex vero et ea dicta et sunt aspernatur ullam. Sit et et ut quis. Et dolorem non alias excepturi et et.\n \rQuos consequatur nesciunt optio nulla quae neque et consequatur. Vel eos dignissimos assumenda. Incidunt nisi provident quo eos dolore culpa.\n \rSed error voluptate id aliquam repudiandae tenetur minima. Quia eveniet natus harum aut ad modi totam temporibus ea. Incidunt veritatis non earum unde.\n \rAsperiores dolorem doloremque et est distinctio quaerat et. Ratione quas harum quam at sunt eum dolor culpa. Rerum repellat qui vel delectus delectus. Nobis a rerum accusantium quasi adipisci sint laudantium quos omnis. Illum cum tempora fuga optio impedit. Ducimus voluptate excepturi expedita est beatae quas voluptates quos laboriosam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 119,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 98 },
    seo: {
      title: 'Handcrafted Soft Cheese | Zahradnictví u Juliuse',
      description:
        'Labore aperiam aliquid labore voluptatem earum rem dignissimos.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Concrete Soap',
    slug: 'Gorgeous-Concrete-Soap',
    shortDesc:
      'Non accusantium quae nesciunt molestiae molestiae voluptatem inventore.',
    description:
      'Dolores est sed consequatur. Aut voluptas molestiae ad vel voluptatem incidunt minus aut placeat. Ipsam quam eos. Vel eius harum officiis commodi laudantium iusto sit labore. Expedita perferendis fugit velit molestias enim dolorem.\n \rNobis officia optio est est debitis id non blanditiis. Dignissimos saepe eligendi non et consequatur ipsam occaecati. Atque enim dolores animi aut. Quae in voluptatum dolores et maiores praesentium mollitia dolor. Est incidunt tenetur.\n \rAut sint autem perferendis cumque ut fugiat. Et consequatur repudiandae laudantium culpa adipisci iure nihil. Quis quis magnam velit voluptate corporis. Illum tenetur voluptate sint vero possimus vero. Sed et iste repellendus aut minima in.\n \rAut maxime laboriosam maiores. Omnis saepe quia optio sint. Aliquid tempora vel veniam qui fuga laboriosam dolorem sed odit. Saepe consequatur in. Labore provident sed nihil dolore voluptatibus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 39,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 9 },
    seo: {
      title: 'Gorgeous Concrete Soap | Zahradnictví u Juliuse',
      description:
        'Non accusantium quae nesciunt molestiae molestiae voluptatem inventore.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Gorgeous Rubber Bacon',
    slug: 'Gorgeous-Rubber-Bacon',
    shortDesc: 'Ut ut officia numquam distinctio blanditiis sequi occaecati.',
    description:
      'Quae ipsa ab quibusdam explicabo. Inventore nulla qui et magni sed atque iusto exercitationem. Architecto maxime ut eius consequuntur nam. Maxime et excepturi cum animi molestiae ratione doloremque. Consequatur quaerat occaecati eos hic quis aliquid molestiae et quia. Unde ex sit animi hic aspernatur quia suscipit.\n \rFacilis sint molestiae tenetur hic molestias reiciendis quam. Eum molestiae veniam saepe ut omnis cum. Perspiciatis culpa dolor voluptatem repellat voluptatem quis aut. Ab eius et temporibus molestiae et. Nulla fuga corporis. Neque non est aut provident.\n \rEt inventore distinctio. Consequatur eum rerum repellat aliquid non corrupti architecto consectetur non. Cum quae aut ut fugiat. Nulla corrupti laborum qui veritatis.\n \rEst repellat velit quo ut. Et quo impedit. Harum id dolores earum nemo sint pariatur nulla cumque ipsa. Aliquam dignissimos nihil qui fuga. Accusantium voluptates non et natus dignissimos repellat.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 359,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 24 },
    seo: {
      title: 'Gorgeous Rubber Bacon | Zahradnictví u Juliuse',
      description:
        'Ut ut officia numquam distinctio blanditiis sequi occaecati.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Soft Bacon',
    slug: 'Gorgeous-Soft-Bacon',
    shortDesc: 'Aut est perspiciatis similique nulla.',
    description:
      'Voluptatem exercitationem quo optio. Numquam aliquam voluptas et debitis explicabo repellendus inventore eos. Qui nulla aut repellat tempore soluta qui modi. Eius voluptatem quidem non illum cupiditate et.\n \rAut sunt commodi atque corrupti. Dicta sed quas. Et porro facilis. Est et est officiis alias temporibus voluptatem eum sunt perspiciatis. Optio perspiciatis doloribus eum facere ut quod eveniet.\n \rAt deleniti rem minima fuga et et libero ab. Minus aliquid ipsam nemo. Perferendis ipsum dolorum facere et labore.\n \rAut labore voluptatem delectus voluptatem quos quasi odit sit assumenda. Facere porro et quasi recusandae. Itaque error itaque illo repellat. Repellendus omnis voluptatem et. Eos et ut est non eaque consectetur qui.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 119,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 44 },
    seo: {
      title: 'Gorgeous Soft Bacon | Zahradnictví u Juliuse',
      description: 'Aut est perspiciatis similique nulla.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Rustic Soft Computer',
    slug: 'Rustic-Soft-Computer',
    shortDesc: 'Incidunt hic sit cumque magnam natus soluta.',
    description:
      'Illo sequi voluptas est qui quasi voluptates a. Quia et voluptas provident impedit ut inventore omnis. Molestiae ut non eos et. Est corporis occaecati enim quidem.\n \rQui est et aut. Aperiam enim hic qui. Quas ut et quam molestiae. Eligendi aut autem culpa sit. Fugiat nesciunt aspernatur sapiente sed consectetur fugiat. Ullam laudantium voluptatem earum.\n \rUt ducimus a eius odit non provident et dolorem. Occaecati omnis facere rerum enim id. Qui perspiciatis non enim commodi ut dignissimos aspernatur perferendis quam. Recusandae repudiandae harum officiis id rerum eos in.\n \rNihil error necessitatibus vel nam rem velit aut veniam nam. Non iusto aut commodi. Exercitationem ipsam porro voluptas quia alias quo provident nostrum maiores. Ad quis est et ad odio suscipit ab blanditiis sed. Voluptatem doloremque illum aut nesciunt velit ut veniam nisi. Beatae sint eum accusamus recusandae.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 419,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 58 },
    seo: {
      title: 'Rustic Soft Computer | Zahradnictví u Juliuse',
      description: 'Incidunt hic sit cumque magnam natus soluta.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Generic Concrete Towels',
    slug: 'Generic-Concrete-Towels',
    shortDesc: 'Itaque nam hic labore ab ipsa.',
    description:
      'Provident dolor amet. Molestiae alias consectetur consequatur vel autem aliquam. Quasi nesciunt beatae. Explicabo magni ut.\n \rIusto voluptas in quis quidem voluptas eum unde. Blanditiis nihil omnis aspernatur totam et sit. At nisi qui quisquam veritatis. Adipisci numquam enim omnis maiores quo. Cupiditate repellendus eum numquam modi ut. Illum debitis et quidem rerum sed sit dignissimos nemo.\n \rEt possimus eos velit qui enim doloremque. Tempora quo eius incidunt et sed. Rerum ad quo rerum velit officia in repellat qui autem. Aut expedita consequuntur qui quisquam libero et. Eligendi repellat eveniet autem.\n \rNihil vel qui. A accusamus architecto. Aut dolorem eaque. Voluptate voluptas quia ab perferendis eum exercitationem in. Ut quos maxime voluptatem ut sit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 16 },
    seo: {
      title: 'Generic Concrete Towels | Zahradnictví u Juliuse',
      description: 'Itaque nam hic labore ab ipsa.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Wooden Sausages',
    slug: 'Rustic-Wooden-Sausages',
    shortDesc: 'Voluptas repellat quasi facilis et voluptatem labore quae.',
    description:
      'Quo qui voluptas dolorem laudantium enim ab. Vel qui soluta distinctio tempore aut nobis tenetur officia. Tempora soluta rem eaque omnis. Et vel laboriosam ea. Iure natus totam at illum est suscipit necessitatibus.\n \rOmnis consectetur nisi consequatur. Reprehenderit id pariatur quia. Fuga dolor doloribus. Aperiam ea dolore error qui tempore ut sunt quis. Soluta quas soluta quia voluptas. Officiis excepturi aliquid consequuntur ut doloribus.\n \rEt laborum reprehenderit numquam. Tenetur quo vel optio eius consequatur voluptatem iste soluta est. Itaque rerum non dolorem. Sunt ipsa ea autem omnis.\n \rNisi labore quibusdam. Eum et quo est minus et magnam. Quo sed aut totam sint libero distinctio. Accusamus cumque hic illum deleniti quia. Ratione est voluptas non culpa voluptatem. Blanditiis vero voluptas ex non quia adipisci et.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 319,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 91 },
    seo: {
      title: 'Rustic Wooden Sausages | Zahradnictví u Juliuse',
      description: 'Voluptas repellat quasi facilis et voluptatem labore quae.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Ergonomic Steel Chair',
    slug: 'Ergonomic-Steel-Chair',
    shortDesc: 'Aut est facilis enim voluptatem animi et.',
    description:
      'Repudiandae debitis ut aut incidunt. Veniam vel dolore natus voluptatem nihil exercitationem ex illum. Molestiae tempora id vero occaecati ipsa dolorem tempora corrupti aliquam.\n \rAt quas enim suscipit. Quia quae omnis blanditiis rerum repellat nam. Necessitatibus at incidunt itaque dicta sed magni. Aperiam est dicta quibusdam. Enim quasi eum ut facilis atque adipisci nisi non ut.\n \rExplicabo aut sunt quas vitae quia dicta. Aut neque dicta et amet voluptatem ipsa fuga omnis. Velit et distinctio quo perferendis consequatur et aut ut. Iusto dolores rerum non accusantium. Dolorem et cum quisquam expedita maxime modi quo. Omnis reiciendis molestiae eligendi maxime quia sunt mollitia eos incidunt.\n \rConsequatur eum ad maxime optio laborum vel sit sequi repellat. Necessitatibus eveniet error magnam. Et in unde tempore aut error facilis aut eius voluptatibus. Ad accusamus quos quaerat temporibus. Doloribus tempora ut aut accusantium ipsum earum cumque quia voluptate.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 469,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 53 },
    seo: {
      title: 'Ergonomic Steel Chair | Zahradnictví u Juliuse',
      description: 'Aut est facilis enim voluptatem animi et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Intelligent Cotton Chips',
    slug: 'Intelligent-Cotton-Chips',
    shortDesc:
      'Ducimus aliquid quis quod similique non occaecati magnam nihil.',
    description:
      'Dolorem consequatur voluptas nostrum qui ipsam unde vero nesciunt doloremque. Est eum saepe ipsum neque ea. Aut alias ut blanditiis veniam commodi sit rerum quo minus. Est saepe maiores. Amet provident consequuntur est ratione. Similique ab eveniet vero voluptatem iusto est consectetur ut ut.\n \rOdio quisquam quis tenetur facilis sed aut ullam veniam reprehenderit. Repellendus assumenda dicta debitis explicabo. Voluptatem pariatur atque ut impedit. Quidem voluptatem enim eaque porro iste deserunt illo quia. Aut voluptatibus nobis quod nulla dolorem corrupti voluptatem repellendus. Sint iure ut quos alias sit quo.\n \rEt ab rem molestias doloribus veniam praesentium. Voluptatem eos molestias eos. Odio recusandae incidunt est.\n \rEt et porro dolorem non quisquam quibusdam optio exercitationem est. Corporis odit eaque vel. Harum impedit necessitatibus voluptatem. Amet quas amet magnam vero animi ut. Sed incidunt accusamus voluptatem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 50 },
    seo: {
      title: 'Intelligent Cotton Chips | Zahradnictví u Juliuse',
      description:
        'Ducimus aliquid quis quod similique non occaecati magnam nihil.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Rustic Steel Table',
    slug: 'Rustic-Steel-Table',
    shortDesc: 'Ad numquam delectus doloremque laboriosam.',
    description:
      'Consequatur velit quisquam. Sequi debitis perferendis numquam quae est sit omnis. At qui non laudantium accusantium esse consequatur velit praesentium veritatis. Repellat doloremque impedit et veritatis dolorem autem ipsa. Temporibus ducimus cum. Dicta asperiores aut doloremque omnis veritatis voluptatem quis nesciunt et.\n \rEnim qui nobis in ut ab excepturi molestiae voluptate. Ex nisi explicabo ut rerum maiores. Nihil numquam ut suscipit commodi sit velit eveniet totam. Saepe est nihil quia rem dolorem. Omnis sed ab consequatur officia dicta architecto perferendis.\n \rOmnis autem et vel qui debitis natus error minus qui. Cumque beatae accusamus ex itaque explicabo velit maxime ut. Similique nulla blanditiis qui hic dolore. Sit quia aut possimus. Quibusdam et quam.\n \rQui dolores beatae fugiat ipsa aut numquam et sit. Fugiat odio quae consequatur ad commodi harum. Id aut eaque consequatur consectetur dolores. Modi dolores nulla aut minus aut aspernatur enim. Molestiae laboriosam aut harum. Quidem aperiam aut accusantium occaecati provident voluptatem consequuntur velit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 239,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 28 },
    seo: {
      title: 'Rustic Steel Table | Zahradnictví u Juliuse',
      description: 'Ad numquam delectus doloremque laboriosam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Fantastic Rubber Towels',
    slug: 'Fantastic-Rubber-Towels',
    shortDesc:
      'Magni vitae ab accusantium voluptatem voluptatum molestiae nihil magnam tempora.',
    description:
      'Et fugit a nisi distinctio quam. Natus aliquam est. Magni officiis est veniam et possimus et sapiente. Eaque libero eum. Quos deleniti sunt sed et id sed voluptates pariatur. Consequatur voluptatem asperiores omnis in et soluta similique rerum ut.\n \rAutem saepe est error vel. Aut dicta et aut deserunt quia occaecati qui. Ipsum enim aliquid.\n \rProvident ab non est officiis quis quo. Quas quos rem sed qui molestiae commodi quia ratione ut. Laboriosam modi vel aliquam rem dolorem est. Sequi sed est aut. Dolorum consequatur necessitatibus sed ad aspernatur similique suscipit ut. Fuga dolores officiis recusandae doloremque officiis inventore eveniet.\n \rVoluptatem possimus quis odio sed quibusdam. Qui eos et nemo. Dolor ratione illo vel quasi delectus et quam eaque culpa. Quia sunt cupiditate repellat vero illum enim vel labore. Dolore quia aut aliquid tenetur rem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 109,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 12 },
    seo: {
      title: 'Fantastic Rubber Towels | Zahradnictví u Juliuse',
      description:
        'Magni vitae ab accusantium voluptatem voluptatum molestiae nihil magnam tempora.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Generic Frozen Shirt',
    slug: 'Generic-Frozen-Shirt',
    shortDesc: 'At accusamus earum dolorem error.',
    description:
      'Ullam libero dolor molestiae. Ullam omnis numquam. Non quia quibusdam iure cupiditate veniam. Ut minima dolor. Dolores quia fuga aut.\n \rSapiente qui laudantium unde non a eum delectus. Fugit natus nobis sit quibusdam voluptatibus voluptatum nulla. Odit qui veritatis non. Vel ab architecto tempore eos. Eum voluptatem in magnam et placeat modi sed consectetur.\n \rIllum dolor deleniti voluptas. Similique laudantium totam consequatur optio beatae quasi fugiat ducimus aliquam. Impedit ut sed possimus officia impedit pariatur aperiam exercitationem. Culpa illo quia molestiae quia est aut impedit et nesciunt. Error quidem voluptate.\n \rAlias exercitationem et aut quaerat quod et ut non. Dolor error ut mollitia atque modi nulla autem expedita. Nihil voluptas ut illum qui beatae eius provident ea ipsam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 189,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 8 },
    seo: {
      title: 'Generic Frozen Shirt | Zahradnictví u Juliuse',
      description: 'At accusamus earum dolorem error.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Ergonomic Soft Chicken',
    slug: 'Ergonomic-Soft-Chicken',
    shortDesc: 'Nemo eos tenetur delectus nesciunt iure quod illo.',
    description:
      'Natus pariatur voluptas dolorum veniam. Eum id deserunt et explicabo amet. Aut laudantium consequuntur consequatur non qui consequatur incidunt omnis mollitia. Maiores nihil ea optio rerum cum dicta non ut in. Quia quidem cupiditate aut quo. Voluptas architecto eius ipsam veniam voluptas eum.\n \rDolores voluptas quasi officiis amet voluptates nostrum quia ut. Itaque voluptas ut earum. Odit tempora corporis cupiditate facilis sint aut et voluptates. Velit veritatis dolor suscipit voluptatem qui est enim quo voluptas. Ex quo et culpa culpa vel.\n \rEt quae impedit omnis neque quibusdam ab porro quia hic. Ipsam illo aut praesentium. Nulla amet magnam repudiandae. Nobis autem sint. Et sequi quis voluptatem. Esse consequuntur laudantium qui eligendi officia magnam et in sunt.\n \rQuia ut quis excepturi quae ullam reprehenderit sed qui consectetur. Sit dolorum fugiat praesentium nisi incidunt magnam tempore et voluptatem. Recusandae voluptas esse officia beatae voluptatem facere.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 349,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 42 },
    seo: {
      title: 'Ergonomic Soft Chicken | Zahradnictví u Juliuse',
      description: 'Nemo eos tenetur delectus nesciunt iure quod illo.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Awesome Plastic Pizza',
    slug: 'Awesome-Plastic-Pizza',
    shortDesc: 'Quam veniam nemo est et commodi et suscipit.',
    description:
      'Id quod qui dicta optio molestiae quo. Id cupiditate impedit sapiente in. Nemo ipsa inventore quasi impedit tempore totam.\n \rNihil id molestiae libero. Non amet omnis dolorem. Ducimus similique reprehenderit voluptate itaque.\n \rAb ut dolorem eveniet est debitis delectus vel suscipit. Ex quas quasi maxime. Natus quo et nam distinctio quis enim voluptatem.\n \rIpsum esse eaque accusantium eos neque. Repellendus et veritatis minus voluptas et et esse voluptatem quam. Eum odio repellat est et sunt vero. Atque at consequatur. Cupiditate et culpa pariatur quos ut eos rerum ipsum rerum. Impedit nemo facilis eveniet totam ea dignissimos voluptates et qui.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 399,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 43 },
    seo: {
      title: 'Awesome Plastic Pizza | Zahradnictví u Juliuse',
      description: 'Quam veniam nemo est et commodi et suscipit.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Practical Granite Cheese',
    slug: 'Practical-Granite-Cheese',
    shortDesc:
      'Placeat itaque nulla rerum et quis exercitationem quos ea quos.',
    description:
      'Ullam cupiditate soluta autem. Iste commodi quia. Numquam aut fuga illo officia numquam hic.\n \rUt quisquam autem tempore at inventore voluptas sed. Ut reprehenderit voluptate architecto optio aut recusandae quasi. Voluptas numquam aliquid officiis eos non suscipit possimus qui vel. Dolorem harum illo sit. Vero nostrum praesentium rem est velit eligendi aperiam.\n \rVoluptatem est laboriosam et sit ea ea. Doloribus quo mollitia ipsum consectetur ducimus. Soluta cum illum velit quis totam praesentium perferendis quia itaque. Ea cupiditate ullam. Tempore quia autem.\n \rReprehenderit tempora quia repellendus facilis qui et ea enim. Quo saepe explicabo porro laboriosam rem asperiores tempora cumque. Incidunt sunt blanditiis numquam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 179,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 77 },
    seo: {
      title: 'Practical Granite Cheese | Zahradnictví u Juliuse',
      description:
        'Placeat itaque nulla rerum et quis exercitationem quos ea quos.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handmade Metal Salad',
    slug: 'Handmade-Metal-Salad',
    shortDesc: 'Eos ut vel quia vel.',
    description:
      'Aut sit magni et autem aliquam esse aut consequatur id. Officia reiciendis iure nesciunt eos est doloribus non voluptatem qui. Id vel sit sapiente est fugit deserunt corporis. Possimus sed eos excepturi et aliquam tempore ea. Tempora provident aut eum dolorem cumque sint. Recusandae autem eveniet nulla exercitationem placeat.\n \rNon quod qui voluptate quis quisquam sed et numquam. Aperiam aut alias adipisci. Consequatur illum non odit saepe asperiores necessitatibus dolores delectus. Debitis nulla autem mollitia officiis quos non distinctio.\n \rAut temporibus et eum et et repellendus esse. Illo ducimus eum fugiat. Fuga dicta nam dignissimos aut.\n \rNihil ut magnam qui quia voluptas rem provident voluptatem aspernatur. Quam officia sequi molestiae ut minus cupiditate soluta cupiditate alias. Eum quo veniam itaque velit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 329,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 49 },
    seo: {
      title: 'Handmade Metal Salad | Zahradnictví u Juliuse',
      description: 'Eos ut vel quia vel.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Intelligent Soft Car',
    slug: 'Intelligent-Soft-Car',
    shortDesc: 'Quia repellendus et.',
    description:
      'Sint quia nostrum et laborum deleniti fugiat aliquid. Tempore minima exercitationem id distinctio accusamus aut voluptatem dignissimos. Nemo est iure doloribus explicabo ratione iusto quas recusandae. Nemo et ut consequatur qui ea. Ullam quia est animi consequatur facere iste impedit. A suscipit unde amet.\n \rUt amet aliquam repellat est assumenda assumenda quia. Quos voluptatibus adipisci qui dolore praesentium molestiae. Quaerat harum a. Eos iure nemo repellat iste. Totam explicabo odio et nemo earum.\n \rEaque inventore et nihil animi hic. Fugiat qui cumque omnis ut ea eum est. Culpa inventore quia earum voluptas odio corporis. Culpa autem veritatis.\n \rEum repudiandae qui architecto cum fuga. Quis natus doloribus ut fugiat dolores eos suscipit. Sit temporibus animi. Recusandae sit dolore molestiae.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 369,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 37 },
    seo: {
      title: 'Intelligent Soft Car | Zahradnictví u Juliuse',
      description: 'Quia repellendus et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Intelligent Concrete Pizza',
    slug: 'Intelligent-Concrete-Pizza',
    shortDesc: 'Nihil qui laborum quia enim quo in saepe.',
    description:
      'Dolore accusamus nam eos fugit explicabo deserunt. Et blanditiis non natus. Quis quod animi ut dolor et voluptas. Molestiae facilis eum eum ad. Sint molestias tenetur et atque voluptatibus iste.\n \rLaborum et temporibus repellat atque et molestias fugit aspernatur voluptatem. Qui qui iusto aut molestiae non. Non est qui soluta corrupti consequatur officiis et a. Harum praesentium beatae culpa tempore totam vel. Illum ut et voluptas.\n \rQuos accusantium a labore voluptatem ullam quod vero eius quos. Dicta quas odio. Molestias libero dolores quia eos et ab ullam dolorum.\n \rQui consequatur labore quis consectetur asperiores hic. Minima assumenda ea est repudiandae vitae. Et dolor impedit. Facere temporibus qui quidem optio rerum non. Id ut placeat autem odit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 69,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 72 },
    seo: {
      title: 'Intelligent Concrete Pizza | Zahradnictví u Juliuse',
      description: 'Nihil qui laborum quia enim quo in saepe.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Awesome Cotton Mouse',
    slug: 'Awesome-Cotton-Mouse',
    shortDesc: 'Nam earum quasi voluptatibus id fuga error et.',
    description:
      'Similique qui et animi officiis dicta atque. Est dolorem animi doloribus ea. Ut et natus. Facilis excepturi dolor aut aspernatur ipsum perferendis.\n \rEx aut eos incidunt sint consectetur velit ab perferendis similique. Ex ea unde itaque consequatur sunt aut sit eum excepturi. Asperiores dolorem repellat voluptatum quis nihil voluptatum. Sapiente sequi tempora quae ut esse ducimus ut amet.\n \rQui repudiandae velit mollitia voluptas odio non omnis sed. Voluptatum nobis et blanditiis aliquam id. Nihil consectetur in. Voluptatem ratione at mollitia sed delectus voluptatem quia.\n \rPraesentium et est et qui sit et. Ab quas ut assumenda numquam nam. Iste reiciendis labore est facilis aut culpa. Atque enim ut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 54 },
    seo: {
      title: 'Awesome Cotton Mouse | Zahradnictví u Juliuse',
      description: 'Nam earum quasi voluptatibus id fuga error et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Generic Frozen Computer',
    slug: 'Generic-Frozen-Computer',
    shortDesc: 'Repudiandae omnis quasi.',
    description:
      'Neque nulla error eos et voluptatibus voluptatum. Quasi nesciunt incidunt et necessitatibus qui explicabo. Accusamus consectetur atque sit similique aspernatur. At sed velit voluptate ipsam harum. Et quis ipsa et pariatur sed. Ut dolor molestias fuga aut sed iure temporibus aut.\n \rEst ut laboriosam ut voluptatum dolores vel harum vitae sint. Enim et veritatis dolores architecto. Eius et magnam nobis eos odio et quia. Nulla quasi natus impedit sint perferendis ut. Unde ex qui sunt esse dolore molestiae. Laboriosam et totam eaque harum velit quo perferendis quos.\n \rMolestiae in commodi ut quo fugiat quam asperiores. Nihil quis laboriosam debitis similique et. Modi blanditiis dolores qui voluptatem inventore voluptates non sit.\n \rVoluptatem aut in ut nesciunt. Esse aut at aspernatur aut nihil magni voluptatem. Quo esse nesciunt ut eum corporis ut esse aut et. Praesentium et voluptatum et quod tenetur temporibus blanditiis architecto.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 129,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 28 },
    seo: {
      title: 'Generic Frozen Computer | Zahradnictví u Juliuse',
      description: 'Repudiandae omnis quasi.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Awesome Cotton Mouse',
    slug: 'Awesome-Cotton-Mouse',
    shortDesc: 'Quia adipisci est id earum veniam ea optio.',
    description:
      'Nobis ducimus et harum. Totam rerum quas veniam. Corrupti repellendus error nostrum dolores iste.\n \rRepudiandae et harum natus assumenda. Velit inventore dolorem impedit cum sint itaque odit. Id porro sint mollitia quidem adipisci.\n \rIllum aut quidem qui. A distinctio quo tempore repellat maiores aperiam voluptas sapiente minima. Nihil ducimus et dicta voluptatem ipsa placeat vitae numquam. Itaque repudiandae debitis atque cumque qui ratione. Est sunt culpa atque quo dolorem.\n \rAperiam ipsum sit pariatur eius modi est. Eveniet iusto et aut tenetur dolore dolor aliquid totam. Voluptatem vitae dolorem omnis sed aut. Possimus molestiae ipsam sapiente.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 98 },
    seo: {
      title: 'Awesome Cotton Mouse | Zahradnictví u Juliuse',
      description: 'Quia adipisci est id earum veniam ea optio.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handcrafted Granite Shoes',
    slug: 'Handcrafted-Granite-Shoes',
    shortDesc: 'Hic dolores dolores ab ullam voluptatibus nobis aperiam.',
    description:
      'Ipsam amet dolor quos aut explicabo sed et. In pariatur error ratione. Et exercitationem et sit incidunt molestias perferendis quos commodi.\n \rAt aliquid harum labore vero. Labore est vel qui et. Quisquam enim sed labore fugit delectus. Incidunt placeat aspernatur rerum ut at et provident et. Suscipit distinctio aperiam molestiae qui aut est. Corrupti perspiciatis ducimus voluptates eum in ut.\n \rNeque modi et facere eius. Ipsa repudiandae aut officia accusantium consequatur animi tenetur consequuntur et. Ratione vitae quia possimus voluptas quia odio ut numquam in. Non assumenda nemo tempora et quia iusto. Laudantium consequuntur repellat dolor rerum consequuntur repellat illum animi.\n \rId ut suscipit qui repudiandae accusantium natus voluptate. Culpa animi voluptatum officiis. Quo voluptatum velit aspernatur. Expedita porro tenetur. Qui minima autem. Est et amet sapiente quaerat fugiat aliquid dolore ducimus voluptate.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 29,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 21 },
    seo: {
      title: 'Handcrafted Granite Shoes | Zahradnictví u Juliuse',
      description: 'Hic dolores dolores ab ullam voluptatibus nobis aperiam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Unbranded Wooden Chair',
    slug: 'Unbranded-Wooden-Chair',
    shortDesc: 'Atque voluptas doloribus laudantium aliquam iure.',
    description:
      'Consequatur ad et eum. Nobis ducimus qui quod accusantium voluptas excepturi. Iusto temporibus rerum fuga ut a omnis repellendus dignissimos. Magni qui molestiae cum neque facere. Tenetur quis nisi incidunt voluptate aliquid voluptatem.\n \rAdipisci at id pariatur at delectus qui. Fugit voluptatem natus id et velit ipsam ut quaerat inventore. Consequatur ut cum sint atque dolor tempore. Accusantium ducimus adipisci rem aut est iure dolorem saepe.\n \rNon aliquid eligendi perspiciatis sint. Ut autem dolor quibusdam ut et. Voluptatem placeat at qui ut quos aut in id.\n \rNemo iure quae accusamus totam enim. Nulla perferendis provident recusandae non voluptatem sint doloribus. Et culpa qui quia numquam corrupti ipsam eveniet maxime optio. Qui blanditiis ratione illum deserunt. Repudiandae ad sapiente est totam dolores et unde id. Facere voluptatem architecto in voluptatem eius porro.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 149,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 38 },
    seo: {
      title: 'Unbranded Wooden Chair | Zahradnictví u Juliuse',
      description: 'Atque voluptas doloribus laudantium aliquam iure.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Unbranded Soft Pizza',
    slug: 'Unbranded-Soft-Pizza',
    shortDesc: 'Similique omnis nam.',
    description:
      'Occaecati fuga libero beatae incidunt saepe veniam. Nobis autem sit voluptatem est aut reiciendis. Aut eius qui nobis. Nobis sit porro veritatis inventore ea dolore totam dicta explicabo. Magni quis explicabo ipsa ea voluptas blanditiis reiciendis voluptatibus in. Non provident consequatur dignissimos id quia architecto nihil.\n \rNam est cupiditate. Vel dolorum voluptas mollitia nobis ipsam at. Sapiente libero sunt ullam. Reprehenderit aut in tempore ut voluptas at deleniti deleniti. Voluptatem veniam et atque aliquid qui voluptas ad enim.\n \rFacilis reprehenderit adipisci consequatur eligendi et et perferendis consectetur quibusdam. Id necessitatibus mollitia autem voluptatibus nostrum cupiditate magni. Est accusantium cumque repellat id consequatur dolor. Voluptas perferendis recusandae voluptas corporis quas quas dolores. Est inventore quisquam dolores aperiam nihil.\n \rVoluptatem dignissimos eveniet. Repellendus laborum ut rem et consequatur qui ab. Maiores aliquam repellendus totam tempore maxime earum sapiente qui.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Unbranded Soft Pizza | Zahradnictví u Juliuse',
      description: 'Similique omnis nam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Steel Salad',
    slug: 'Incredible-Steel-Salad',
    shortDesc: 'Qui ea autem et ex et numquam iure quia.',
    description:
      'Qui ipsam quod at quod quidem mollitia nam quo animi. Perspiciatis fugiat dolores illum vero amet vel quam. Occaecati ipsum adipisci vel quia quidem tempora explicabo doloremque quas.\n \rVoluptatem autem qui est omnis mollitia et aspernatur. Ratione doloribus provident commodi nostrum quia. Eos asperiores fugiat aut autem neque molestias accusantium non.\n \rEum deserunt facilis. Impedit sapiente doloribus et error qui repellendus autem. Fuga error velit id error itaque. Fugit voluptates dignissimos. Tempore accusantium aperiam vel fugit quia ut. Dolor nulla sint sed.\n \rNon et laboriosam libero quia vero quia. Facere nisi quae consequatur voluptas praesentium dolorum atque voluptatem. Laboriosam sunt cupiditate nobis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 589,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 65 },
    seo: {
      title: 'Incredible Steel Salad | Zahradnictví u Juliuse',
      description: 'Qui ea autem et ex et numquam iure quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Rustic Soft Bike',
    slug: 'Rustic-Soft-Bike',
    shortDesc: 'Voluptas est est accusantium.',
    description:
      'Aut neque cumque ea recusandae minima modi mollitia. Deserunt consectetur qui quia cupiditate sed et aperiam quae. Fugiat provident magni fugit et qui voluptas sequi voluptatem odit. Repudiandae qui non blanditiis aut sapiente deserunt ab rerum. Et velit est. Non tenetur cupiditate.\n \rQui non magnam. Accusamus ad exercitationem ratione. Molestias voluptatem necessitatibus recusandae rerum. Sunt exercitationem voluptatum magni accusantium.\n \rTenetur neque voluptas suscipit dignissimos sed ipsa et molestiae quia. Enim voluptatem consequatur ea dolorem quae totam minus dolorem ipsa. Praesentium ut velit est consequuntur. Suscipit tempore amet id error qui ratione eligendi voluptate beatae.\n \rAspernatur enim quasi est quia minus autem dolores culpa. Pariatur autem qui cupiditate accusamus iusto nostrum qui alias et. Porro corrupti rerum debitis culpa dolorem consequatur. Asperiores omnis debitis repellat neque voluptatem enim. Iusto nisi dolores sapiente minima aut laboriosam maiores aliquid. Velit quo et at sequi eum facilis odit et.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 599,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 91 },
    seo: {
      title: 'Rustic Soft Bike | Zahradnictví u Juliuse',
      description: 'Voluptas est est accusantium.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Unbranded Steel Fish',
    slug: 'Unbranded-Steel-Fish',
    shortDesc: 'Soluta quaerat aut molestiae.',
    description:
      'Sed molestias velit aliquam corrupti ullam quas. Consequatur ut iste qui doloremque et laudantium. Deserunt ducimus vel molestias facilis iusto rerum molestiae. Maxime eos sunt eius nesciunt molestiae sint. Rerum dolorem molestiae tenetur deserunt in nulla cupiditate repellendus cupiditate. Inventore dolore veniam aut saepe et.\n \rQuidem quasi dolor labore aperiam quis dolorem assumenda dolores deserunt. Modi quia ipsum expedita esse officia alias placeat aut aut. Ea possimus molestiae quo ipsam a autem nisi officiis. Esse ut ut voluptate iure perferendis quasi quia assumenda. Quo reiciendis ad reprehenderit odio provident pariatur ipsa rerum.\n \rOfficia ut necessitatibus consequatur quia sed est at et saepe. Est enim voluptas. Qui et magnam magni harum fugiat est iusto at enim. Suscipit praesentium molestiae modi nemo maiores. Ipsum totam deserunt nihil voluptatem in doloremque.\n \rAut nihil et recusandae aspernatur. Qui illo eum porro maxime nesciunt nemo. Sed voluptatem animi sequi ut perferendis exercitationem maiores veniam nihil. Corrupti commodi accusantium doloremque. Aperiam omnis ut aliquam quae enim. Consequatur iusto in necessitatibus veritatis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 179,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 67 },
    seo: {
      title: 'Unbranded Steel Fish | Zahradnictví u Juliuse',
      description: 'Soluta quaerat aut molestiae.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Fantastic Frozen Chicken',
    slug: 'Fantastic-Frozen-Chicken',
    shortDesc:
      'Quos nihil distinctio porro architecto voluptatem at nesciunt molestiae adipisci.',
    description:
      'Doloribus ut nemo numquam nihil. Ipsam laboriosam est. Ut et distinctio necessitatibus hic quo quia. Omnis amet quos excepturi quis quaerat praesentium. Voluptas repellat inventore fugit necessitatibus et amet explicabo.\n \rPorro rerum similique non rerum accusamus. Ducimus nisi doloribus voluptatem natus officiis qui est velit et. Consequatur dolorem rerum qui. Impedit sit vero aperiam sint ex consequatur.\n \rQuam distinctio mollitia. Ducimus totam iste porro. Dolorem repudiandae ex saepe doloribus. Non eum cumque ut voluptas est.\n \rFacere hic voluptatem est dolores odio debitis aspernatur. Illum qui officiis aut natus cupiditate velit reprehenderit. Et aut dolores voluptatem porro nobis molestiae non eos. Nobis esse ipsum vitae tempore nemo et voluptatem sed. Voluptates ex recusandae culpa facilis. Quod sunt accusamus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 149,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 51 },
    seo: {
      title: 'Fantastic Frozen Chicken | Zahradnictví u Juliuse',
      description:
        'Quos nihil distinctio porro architecto voluptatem at nesciunt molestiae adipisci.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Fresh Chicken',
    slug: 'Tasty-Fresh-Chicken',
    shortDesc: 'Eos aut non unde quas perferendis eligendi tenetur.',
    description:
      'Occaecati veritatis nesciunt sit repellat quasi adipisci velit dolor. Autem et libero et velit quidem dolorem voluptas eum voluptatem. Officiis odit dolorum eum nemo perspiciatis magnam assumenda dolor.\n \rEos quasi non aperiam rem quidem. Minima rerum fuga magni repudiandae molestias animi dolore aliquid ut. Nihil doloribus ut.\n \rQuod ex at. Alias molestiae aut ut placeat ipsa voluptatem deserunt officia. Explicabo facere ea quo labore.\n \rReiciendis maiores excepturi at consequatur impedit dolorum aut. Fuga iste autem illum qui molestias. Impedit voluptas beatae eligendi esse tempore labore illum quisquam est.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 139,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 75 },
    seo: {
      title: 'Tasty Fresh Chicken | Zahradnictví u Juliuse',
      description: 'Eos aut non unde quas perferendis eligendi tenetur.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Intelligent Frozen Computer',
    slug: 'Intelligent-Frozen-Computer',
    shortDesc: 'Fugiat et velit quia.',
    description:
      'Neque omnis accusamus et quisquam saepe quibusdam reprehenderit. Temporibus amet tempore enim nemo vero dolor asperiores. Placeat sint est recusandae voluptates quisquam voluptatem. Fugit non itaque et numquam.\n \rNon facilis sed. Et est soluta quia. Consequuntur velit quam explicabo eaque. Quaerat quaerat vel quas non nulla. Ipsam odio voluptatum esse sed voluptatibus laboriosam et qui voluptatem.\n \rDolores ut quo. Est ut qui corrupti laboriosam nihil. Debitis facere voluptas iure et dicta aliquam velit nam. Tenetur suscipit labore iste voluptates. Soluta ut dolorem nulla laboriosam. Odio eaque illum aperiam.\n \rArchitecto consequatur dolores ipsum eum ducimus beatae ducimus praesentium. Tempora inventore sit ut consequatur officia similique alias voluptatem. Modi dolore quisquam laudantium atque esse nobis est.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 85 },
    seo: {
      title: 'Intelligent Frozen Computer | Zahradnictví u Juliuse',
      description: 'Fugiat et velit quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Generic Frozen Computer',
    slug: 'Generic-Frozen-Computer',
    shortDesc: 'Veniam ea voluptatibus deleniti non vel deserunt nam.',
    description:
      'Aut totam quae maiores voluptas consectetur possimus aliquam. Ut adipisci illo voluptatem sunt delectus quasi qui repudiandae. Adipisci nesciunt blanditiis quae alias.\n \rFacere deleniti harum perspiciatis. Nisi et recusandae harum. Et labore eligendi qui esse molestias. Voluptatibus sed consequuntur.\n \rMinima atque ratione eaque. Suscipit consequatur iusto doloribus autem occaecati molestiae et eius repudiandae. Non dolorem velit natus et. Animi est voluptatem eveniet necessitatibus sint et. Dolore eum aut nesciunt placeat.\n \rNumquam quas veritatis voluptatibus voluptates. Qui veritatis rerum. Tenetur quis quis maxime architecto ad beatae. Omnis quod tenetur eius quas hic qui aut id. Doloribus id quae sapiente consequatur in.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 119,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 49 },
    seo: {
      title: 'Generic Frozen Computer | Zahradnictví u Juliuse',
      description: 'Veniam ea voluptatibus deleniti non vel deserunt nam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Sleek Plastic Towels',
    slug: 'Sleek-Plastic-Towels',
    shortDesc: 'Quod repudiandae voluptates est.',
    description:
      'Fuga tenetur eum asperiores. Voluptas non repellat reiciendis distinctio quas animi. Tempora ut rerum facilis numquam et reprehenderit et perferendis.\n \rAliquid rem qui possimus sunt. Perspiciatis ipsam reiciendis facere. Saepe sint consectetur minima ea. Et unde saepe laborum aspernatur totam est facilis quis repudiandae.\n \rAnimi omnis et deleniti enim molestiae quia ut et. Blanditiis illum consequatur itaque quis possimus. Maiores velit consequatur voluptate qui reiciendis.\n \rEt aliquam reiciendis laudantium quia hic optio. Eaque illum totam. Qui occaecati exercitationem porro quo quis temporibus. Delectus atque ut et impedit qui autem porro. Quas autem ut quia officia ea.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 139,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 42 },
    seo: {
      title: 'Sleek Plastic Towels | Zahradnictví u Juliuse',
      description: 'Quod repudiandae voluptates est.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handmade Granite Car',
    slug: 'Handmade-Granite-Car',
    shortDesc: 'Molestias nihil sit ut inventore tempora quia.',
    description:
      'Praesentium atque recusandae. Placeat aut aut consequatur quia non eum reiciendis perspiciatis ipsum. Consequuntur ullam est. Optio qui quisquam. Consequuntur ut quod fugiat voluptatem dicta.\n \rIpsa ut quia consequuntur veniam nemo doloribus sed. Voluptate ratione sed aliquam tenetur repudiandae saepe fuga. Optio nulla debitis maiores sit sit quis molestias omnis. Saepe illum illum iure. Voluptatum atque alias dolor cum nulla eius.\n \rTemporibus quia voluptates. Laborum qui enim ut dolorem quia excepturi temporibus soluta. Blanditiis aperiam soluta minus doloremque reprehenderit velit voluptas. Vel non voluptas fuga ratione ut vero quidem nostrum ex. Sapiente cum doloremque rerum voluptas assumenda minus in aliquid atque.\n \rId sint repellendus fugit. Optio alias aut impedit omnis quidem eum assumenda eos. Laboriosam commodi tempore iste rerum consectetur et numquam. Sunt quos maiores quaerat autem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 60 },
    seo: {
      title: 'Handmade Granite Car | Zahradnictví u Juliuse',
      description: 'Molestias nihil sit ut inventore tempora quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Wooden Soap',
    slug: 'Handcrafted-Wooden-Soap',
    shortDesc: 'Nihil dolorum quasi delectus qui.',
    description:
      'Cumque et enim et et omnis. Pariatur deleniti eum quia corrupti dolorem dicta et in. Quidem neque est. Sint dolor iure sint debitis sint. Assumenda numquam quae similique. Ut aut nesciunt tempore earum inventore qui corporis sint.\n \rReiciendis eos sunt quia deserunt quos ut nihil. Sed omnis vitae. Ea laborum praesentium accusamus. Totam delectus rerum consectetur itaque consequuntur. Occaecati at accusantium inventore sed magni error iusto sed.\n \rAut totam labore accusantium quae necessitatibus non a. Est esse possimus odit in porro sequi. Est quisquam in eos et laborum commodi laboriosam reiciendis. Quia assumenda eligendi deleniti aperiam consequatur. A eum fuga saepe repudiandae autem voluptatem dicta.\n \rOptio ullam neque adipisci id. Ut omnis saepe consequatur repellat molestiae. Temporibus quo aut sed beatae laboriosam id voluptatem reprehenderit. Labore ut hic porro voluptatum rem sunt officia ipsum dolore. Et tenetur tempora omnis. Alias nisi est expedita quia.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 129,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 19 },
    seo: {
      title: 'Handcrafted Wooden Soap | Zahradnictví u Juliuse',
      description: 'Nihil dolorum quasi delectus qui.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Licensed Soft Salad',
    slug: 'Licensed-Soft-Salad',
    shortDesc:
      'Nisi deleniti sequi nam expedita sint ea reprehenderit sunt voluptatem.',
    description:
      'Sit laboriosam quis quia. Nemo suscipit consequatur ut. Consequuntur libero qui deserunt.\n \rEt eos perferendis. Perferendis tenetur maxime consequatur voluptas vel ut quasi rerum nobis. Quos dignissimos laudantium blanditiis tempore aut repellendus modi et. Repellat dolore vero. Et itaque sit aut assumenda eligendi sequi. Accusamus molestias libero ut vero ut.\n \rNihil saepe et. Dolore adipisci aut consectetur nihil. Velit porro fuga voluptas reprehenderit vitae facilis quibusdam necessitatibus. Voluptatem et laborum voluptatem reprehenderit esse. Incidunt ut ea recusandae eum aut aut corrupti rem. Corporis et voluptas est dolorum ipsa.\n \rAut voluptatum ut occaecati maxime qui repudiandae voluptate in. Incidunt pariatur ab veniam recusandae earum illo tempore architecto tempore. Ut quas dignissimos autem vitae rerum veritatis. Ipsum eligendi ab sunt a molestiae alias ipsa minima ut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 82 },
    seo: {
      title: 'Licensed Soft Salad | Zahradnictví u Juliuse',
      description:
        'Nisi deleniti sequi nam expedita sint ea reprehenderit sunt voluptatem.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Steel Shirt',
    slug: 'Rustic-Steel-Shirt',
    shortDesc:
      'Temporibus corrupti sequi officiis minima dolor alias corrupti blanditiis aut.',
    description:
      'Ipsum natus repellat quia laboriosam. Consequatur exercitationem iste molestiae qui eveniet deleniti eum. Dolor corporis eligendi delectus molestias aut.\n \rSit hic voluptates cumque ut beatae quia itaque sed. Omnis consectetur molestiae sed iure. Sunt nobis sapiente et saepe animi. Quis tenetur quos repellat. Qui sapiente nostrum nobis vel voluptatem et ratione.\n \rRecusandae odio quia ut veritatis facere qui molestias consequatur. Est autem officia nihil soluta eos dolorum ut. Voluptatem ut eius id eveniet aliquam aut. Officia illum minima veritatis quis aliquid quas. Asperiores tempore et possimus ut eum.\n \rExpedita incidunt consequatur delectus nobis accusantium ipsum dolores debitis. Dolorum saepe quia. Sint voluptatem aliquam nihil. Eveniet sed minima. Excepturi mollitia qui quasi illo. Soluta quia facere nesciunt hic iure consequatur sint fugit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Rustic Steel Shirt | Zahradnictví u Juliuse',
      description:
        'Temporibus corrupti sequi officiis minima dolor alias corrupti blanditiis aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Sleek Concrete Car',
    slug: 'Sleek-Concrete-Car',
    shortDesc: 'Ab quis maiores pariatur iure consequuntur eum qui.',
    description:
      'Non quos vero expedita id consectetur facilis quis magnam. Quis repellat minus quia in quo quia. Corrupti odio possimus sequi molestiae sunt voluptatem quam debitis. Doloribus enim aliquid omnis dignissimos necessitatibus in dolores. Quis dicta laborum in veritatis. Omnis iusto iste ut incidunt.\n \rFugit architecto et inventore corporis tempore voluptatibus quo dolor. Occaecati magni dolor aperiam dolores. Neque distinctio quis fugit vel. Autem non illo qui numquam sunt iste non dolore.\n \rAut ut natus ut placeat odit eos tempora iure velit. Doloremque perspiciatis commodi. Voluptatem sed harum alias. Architecto est libero.\n \rUt repudiandae exercitationem eum minima totam et dolores tempore. Accusamus at sed sunt accusamus atque. Nulla ut inventore quidem odit. Repudiandae debitis unde aut nobis ab ullam qui. Eos et autem placeat saepe sint qui. Eos delectus eligendi et.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 179,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 10 },
    seo: {
      title: 'Sleek Concrete Car | Zahradnictví u Juliuse',
      description: 'Ab quis maiores pariatur iure consequuntur eum qui.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Generic Wooden Pizza',
    slug: 'Generic-Wooden-Pizza',
    shortDesc: 'Commodi voluptas aut qui sint.',
    description:
      'Libero aliquam iure eius iure et magnam quo. Atque officiis et. Dolorum hic minima. Sunt culpa error et. Ex laboriosam minus repellat.\n \rNesciunt est eaque dolores. Ipsum quis nesciunt. Tempora et itaque. Enim voluptas culpa error et distinctio odio est.\n \rError sit est labore. Voluptas laborum nesciunt quo eveniet quo est. Odio mollitia doloribus ut consequuntur maiores velit dolores nihil amet. Placeat sed enim sequi. Ex omnis fugit iste molestiae tenetur aut fuga. Et est autem rerum laboriosam.\n \rQuia quod tenetur dolor. Nemo reiciendis placeat nobis quos. Excepturi nostrum enim.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 14 },
    seo: {
      title: 'Generic Wooden Pizza | Zahradnictví u Juliuse',
      description: 'Commodi voluptas aut qui sint.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Fresh Chair',
    slug: 'Handcrafted-Fresh-Chair',
    shortDesc:
      'Vero laborum doloremque sit repudiandae rem voluptatem assumenda accusantium velit.',
    description:
      'Ea et odio a. Ab perspiciatis illum soluta sint exercitationem. Provident dolores aliquid est culpa iste. Saepe placeat veniam molestiae. Amet est veritatis laboriosam. Quo omnis repellendus dicta tenetur earum eaque culpa ipsam.\n \rRem est pariatur ea ea doloribus facere molestiae voluptatem. Sit quas quidem aut velit harum consequuntur earum. Amet dignissimos quam sed repellendus nemo voluptatem aut laborum aspernatur. Error commodi officiis. In est autem sit.\n \rIste reprehenderit incidunt cupiditate libero iste odio repudiandae maxime. Illum tenetur sit alias eum facere. Reiciendis a ea vel sit aspernatur officiis fugiat. Nihil nihil qui quos eum placeat ipsa nihil velit. Doloribus est sunt qui accusantium consequatur nesciunt et sint dolor. Et deleniti nobis natus omnis.\n \rDolorem voluptatum aut facere non iste recusandae in pariatur. Et aut atque officiis fugit. Eveniet eum quae quas praesentium illum impedit quibusdam ut nostrum. Dolores earum unde consequatur qui a minima doloremque odit. Deleniti perspiciatis occaecati. Ducimus adipisci quasi quo earum sit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Handcrafted Fresh Chair | Zahradnictví u Juliuse',
      description:
        'Vero laborum doloremque sit repudiandae rem voluptatem assumenda accusantium velit.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Licensed Frozen Gloves',
    slug: 'Licensed-Frozen-Gloves',
    shortDesc: 'Qui pariatur quis quis unde ratione et aut.',
    description:
      'Consequatur quia aperiam. Ut quo laborum et eius dolorem non nostrum qui ipsa. Qui excepturi molestias cumque sunt.\n \rEt rem numquam est. Consequuntur iste consequatur ut adipisci atque dolore. Vero aperiam optio eveniet.\n \rReprehenderit culpa corrupti pariatur corporis id. At omnis dolore error blanditiis. Perspiciatis consequuntur aspernatur aut qui qui tempore optio. Nobis mollitia aut. Aliquam rem iure iure non.\n \rAsperiores porro dolor blanditiis quia sed dolorem eaque facere. Et et aut voluptatibus quis eum. Est minus et aliquam et quidem beatae unde doloribus. Nihil voluptatem alias similique voluptas adipisci vel inventore totam. Non voluptatum architecto consequuntur animi quasi accusamus consequatur est.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 56 },
    seo: {
      title: 'Licensed Frozen Gloves | Zahradnictví u Juliuse',
      description: 'Qui pariatur quis quis unde ratione et aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Rustic Soft Cheese',
    slug: 'Rustic-Soft-Cheese',
    shortDesc: 'Et voluptas harum amet quibusdam dolor.',
    description:
      'Ratione esse consectetur eaque est voluptatem vel dolorem accusantium ipsa. Non suscipit aut. Dolorem voluptatem repellendus magni velit. Laudantium asperiores at aliquid aut harum ullam dolor eveniet deleniti. Quia et dolores aperiam porro. Et nemo expedita qui dolor perspiciatis adipisci.\n \rUt sint itaque repellendus neque. Voluptatem placeat quis soluta aut temporibus doloremque. Deleniti corrupti ab numquam dolore numquam odio eum.\n \rMollitia asperiores ut reiciendis id provident porro qui. Et expedita saepe. Aut tenetur quis natus consequatur qui non rerum nobis. Cumque voluptate aut aliquid non aperiam reprehenderit quibusdam nostrum. Qui id fugiat inventore dolor id facere. Nemo qui odio commodi voluptatem consequatur dolores.\n \rDoloremque dolore id ad nisi est eum nihil voluptas ratione. Earum natus sint qui sit voluptate. Est minima temporibus fugiat excepturi cumque culpa. Maiores quisquam quo vel sit. Consectetur consectetur tempora dolorem atque repellendus labore explicabo. Id voluptatem fugiat et.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 79 },
    seo: {
      title: 'Rustic Soft Cheese | Zahradnictví u Juliuse',
      description: 'Et voluptas harum amet quibusdam dolor.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handmade Wooden Bacon',
    slug: 'Handmade-Wooden-Bacon',
    shortDesc: 'Nam et assumenda.',
    description:
      'Ut ratione quos harum accusantium qui corrupti. Iusto odit neque corporis porro omnis dolores necessitatibus adipisci quod. Aut accusamus velit cupiditate ratione maxime vero repellat. Laborum saepe magni et. Eaque enim ut et et cupiditate eum rerum consequatur sit. Voluptas deserunt dolorem doloremque quaerat et ab iste.\n \rOptio ipsum necessitatibus odio a sed ea. Quia et et fuga ipsa. Vel omnis debitis. Placeat quo voluptatum mollitia assumenda. Ut occaecati rerum cum. Dolorem et quia ut totam excepturi rerum modi.\n \rDolorem exercitationem incidunt consequatur officia velit occaecati earum officia optio. Eaque perferendis aperiam quia cumque eaque dolorem eum. Veritatis est eum et. Possimus fugit esse. Id ut numquam.\n \rAdipisci enim velit aut voluptate praesentium enim fuga. Fuga quidem exercitationem hic voluptatum. Possimus sed magnam id quos necessitatibus perferendis qui eum. Non blanditiis nihil voluptas explicabo. Nesciunt autem est voluptatem laborum qui omnis harum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 179,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 22 },
    seo: {
      title: 'Handmade Wooden Bacon | Zahradnictví u Juliuse',
      description: 'Nam et assumenda.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Metal Chair',
    slug: 'Handcrafted-Metal-Chair',
    shortDesc: 'Eos sed aut ullam quo at nisi quia.',
    description:
      'Non rerum optio voluptate modi pariatur. Ullam voluptatum ipsum sit est et accusantium. Est quas asperiores et qui animi porro eos. Doloribus non error magni vel. Dolorem commodi similique ipsum nemo commodi.\n \rId cumque in. Aperiam nulla et. Voluptatem itaque non earum.\n \rFacilis voluptatem pariatur ipsam aut magni amet perferendis dolore temporibus. Minus commodi vero voluptatem vel velit earum perferendis id. Voluptatibus qui ex est sequi asperiores numquam natus. Repellendus reprehenderit exercitationem at nam reprehenderit provident minus. Saepe nesciunt non occaecati sed.\n \rSint omnis et architecto omnis aperiam. Sed laboriosam sed. In voluptas quos eos dolorem nesciunt minima sequi perferendis hic. Maxime commodi pariatur maxime reprehenderit quam. Ut optio voluptate incidunt voluptate. Praesentium eum illo beatae exercitationem doloremque dolorem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 319,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 59 },
    seo: {
      title: 'Handcrafted Metal Chair | Zahradnictví u Juliuse',
      description: 'Eos sed aut ullam quo at nisi quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Handmade Concrete Bacon',
    slug: 'Handmade-Concrete-Bacon',
    shortDesc: 'Dolorem ducimus magni cupiditate possimus aut.',
    description:
      'Laborum quam impedit ut ea deleniti qui et sit. Cum nisi sapiente reprehenderit est odio magnam odit porro tenetur. Aspernatur placeat impedit neque aut.\n \rTempore earum recusandae ipsum unde voluptatem dicta aut totam. Nisi omnis quia. Aliquam et velit ut.\n \rQui facilis impedit magnam at ducimus quaerat rerum ab nemo. At asperiores soluta molestiae voluptatem voluptas temporibus et eveniet. Labore sed qui quasi ut qui vel dolorem sint. Accusantium ut incidunt est et qui quod quae.\n \rMagnam autem rem temporibus cupiditate. Eaque quis molestiae aut ipsam. Totam dolor eius natus incidunt provident dicta quia ut voluptas. Qui facere nam pariatur consequatur cum fuga rerum. Cumque magnam qui iste quis odit. Aut vel est sit exercitationem possimus nam cumque est dolores.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 99,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 24 },
    seo: {
      title: 'Handmade Concrete Bacon | Zahradnictví u Juliuse',
      description: 'Dolorem ducimus magni cupiditate possimus aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Wooden Fish',
    slug: 'Practical-Wooden-Fish',
    shortDesc: 'Voluptatem et nulla.',
    description:
      'Dolores rerum asperiores quasi. Repellat et odit blanditiis minus est. In dolor dolorum quae pariatur ipsa quia eos ipsum culpa.\n \rTotam quia dolore. Consequatur iusto ratione culpa sapiente consectetur aut corrupti. Molestias cum itaque ullam debitis facere eos optio sunt eum. Doloremque quia accusantium cum expedita deleniti. Reprehenderit at cupiditate.\n \rEnim eligendi impedit porro porro quasi nostrum reprehenderit. Quia delectus ipsum nobis. Molestiae commodi fugiat aliquid aliquid veniam. Illo tenetur veniam et aut unde libero labore.\n \rNon quo ex soluta expedita suscipit perspiciatis error quia. Ad officiis id. Exercitationem nesciunt quisquam aspernatur. Dolorem vel sed. Quod blanditiis esse.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 399,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 45 },
    seo: {
      title: 'Practical Wooden Fish | Zahradnictví u Juliuse',
      description: 'Voluptatem et nulla.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Awesome Cotton Cheese',
    slug: 'Awesome-Cotton-Cheese',
    shortDesc: 'Neque dicta veritatis aut nihil quia officiis quia.',
    description:
      'Assumenda et dicta nisi nihil et nemo laboriosam reiciendis. Quam harum cupiditate sint corporis dolores perspiciatis. Cum doloremque veritatis. Fuga excepturi quia et voluptatem rerum facere aut nesciunt.\n \rRatione et error. Sunt alias quia et ipsum vero cupiditate cupiditate beatae. Alias odio assumenda quod et et aut libero illum nobis.\n \rSit deserunt suscipit necessitatibus tenetur. Facilis sint sunt. Reprehenderit molestiae sit explicabo temporibus. Sit ut repudiandae quas nemo magni.\n \rArchitecto minima sed illo ipsa molestias dignissimos qui eum asperiores. Et at perspiciatis dicta reiciendis exercitationem culpa rerum. At sed commodi officia enim possimus eligendi velit. Fuga velit molestiae qui veritatis. Fugiat et qui consequatur et alias voluptate labore unde dicta. Ut laudantium voluptatem rem voluptates laborum magni et eveniet quo.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 57 },
    seo: {
      title: 'Awesome Cotton Cheese | Zahradnictví u Juliuse',
      description: 'Neque dicta veritatis aut nihil quia officiis quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Awesome Concrete Soap',
    slug: 'Awesome-Concrete-Soap',
    shortDesc: 'Nostrum sint saepe.',
    description:
      'Adipisci rerum porro quo deserunt possimus nisi rerum adipisci eum. Cumque ad commodi. Quia eligendi labore odio autem laborum vel aliquid earum. Consequatur voluptatem porro dolores necessitatibus qui sit ipsam debitis.\n \rAut fugit delectus eum. Et consequatur natus quasi quaerat in quisquam. Ducimus non aut sit eum doloribus voluptatem nihil sit. Labore repudiandae inventore. Omnis consequatur qui quod et.\n \rIllo reiciendis laboriosam. Sapiente quisquam doloremque maxime molestias eos aut est ipsa qui. Suscipit est repellat minima eos assumenda illo quia vero. Aspernatur nobis aut nam deleniti unde velit dolores. Sed molestiae alias. Impedit impedit aut.\n \rMagni eum assumenda quo quo error atque omnis. Aut at quidem sint voluptates. Minus vel quis aut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 10 },
    seo: {
      title: 'Awesome Concrete Soap | Zahradnictví u Juliuse',
      description: 'Nostrum sint saepe.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Small Concrete Chips',
    slug: 'Small-Concrete-Chips',
    shortDesc: 'Quod deleniti modi sequi deleniti.',
    description:
      'Distinctio doloremque iure exercitationem magni repellat dolorem. Distinctio impedit ut qui repellendus non. Ullam neque eligendi dolorum. Earum labore perferendis odit et corrupti vero rerum.\n \rPraesentium nemo quo illum. Quis enim occaecati voluptatem deleniti. Eos iure laudantium facere eveniet ea eaque.\n \rNihil sequi omnis tempora placeat sed velit. Omnis architecto excepturi voluptates et natus ut eum. Atque aut sunt.\n \rMollitia numquam dicta quae sit. In mollitia dolorum molestias sed officiis et temporibus temporibus. Quia aut provident alias alias corrupti amet et laborum. Quis ullam nihil est nisi atque numquam assumenda. Odio qui laudantium ea impedit nulla ea beatae impedit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 16 },
    seo: {
      title: 'Small Concrete Chips | Zahradnictví u Juliuse',
      description: 'Quod deleniti modi sequi deleniti.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Fantastic Rubber Soap',
    slug: 'Fantastic-Rubber-Soap',
    shortDesc: 'Et blanditiis fugiat delectus consequuntur fugiat.',
    description:
      'Eos non sint corrupti quaerat reprehenderit dolorem voluptatem sunt nisi. Iure eveniet totam. Nesciunt sunt mollitia enim ut sapiente. Quidem ipsum soluta quo iusto. Ut aut et dolorem ullam ipsa expedita veniam aspernatur. Non corrupti error velit dolores.\n \rQuaerat porro eum autem quis omnis optio itaque. Dolor quia mollitia ducimus amet reprehenderit ab voluptas voluptatibus commodi. Inventore delectus repudiandae harum voluptas culpa ex.\n \rAsperiores laborum ut aut ut velit tempore esse amet. Odit voluptas mollitia id facilis rem amet hic. Optio eaque voluptatem est recusandae repellat cupiditate.\n \rOdit iste provident. Dolor occaecati mollitia exercitationem aperiam similique. Quam alias ad. Optio assumenda iure ut officia. Blanditiis temporibus expedita maiores porro quam itaque rem sed. Voluptatem impedit non voluptatibus pariatur ad explicabo totam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 29,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 96 },
    seo: {
      title: 'Fantastic Rubber Soap | Zahradnictví u Juliuse',
      description: 'Et blanditiis fugiat delectus consequuntur fugiat.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Refined Plastic Mouse',
    slug: 'Refined-Plastic-Mouse',
    shortDesc: 'Quod possimus veniam placeat veritatis tempore est.',
    description:
      'Quam ad et quod. Cupiditate fugit magnam deserunt voluptatem soluta eos rem dolores iure. Eligendi nihil similique repellendus porro sequi. Eum animi et beatae non aut qui fugiat accusantium. Voluptatibus magni sint commodi quidem.\n \rAspernatur et distinctio sint quis maxime ipsum. Dolores hic neque quia ut voluptates aut aliquid. Distinctio debitis mollitia quod vel ipsam est qui officiis maxime. Temporibus velit vel nostrum.\n \rTenetur eos perferendis sed et quod. Dolores aut eveniet. Voluptates rerum modi fugit aut omnis. Et ut accusantium nobis autem ut porro aspernatur sit. Aut debitis maiores omnis incidunt quia sunt libero sint. Facere quia neque dolorem.\n \rLibero rerum illo facere. Nam tenetur voluptas id inventore. Quia dignissimos ea explicabo dicta quia ducimus voluptas. Minus id expedita.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 259,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 19 },
    seo: {
      title: 'Refined Plastic Mouse | Zahradnictví u Juliuse',
      description: 'Quod possimus veniam placeat veritatis tempore est.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Handcrafted Concrete Cheese',
    slug: 'Handcrafted-Concrete-Cheese',
    shortDesc: 'Ut ut ut illum nobis dolorem.',
    description:
      'Fuga cupiditate magnam ea sint ut atque nostrum iste quo. Veritatis quasi aut dolores est. Dolores mollitia unde nostrum. Magnam consequatur voluptatem.\n \rQuidem temporibus esse. Dolor rem maxime. Aperiam provident ab incidunt dolore quisquam voluptatem omnis sit perferendis. Sit dolor dolore consequatur omnis nobis hic dolorum. Omnis velit ducimus temporibus consequuntur corrupti ratione iste eos alias. In omnis et error est.\n \rQuia molestiae deleniti. Veritatis nostrum blanditiis omnis et. Quos aperiam et provident error voluptas eveniet in nisi. Cumque porro quidem velit et rerum facere nihil. Cupiditate molestias sint exercitationem ut cum non sapiente.\n \rSimilique totam unde dolores nihil eligendi quis eius. Dolor itaque corrupti numquam aut provident. Voluptatem fugit tempora alias omnis nostrum assumenda ut quis velit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 15 },
    seo: {
      title: 'Handcrafted Concrete Cheese | Zahradnictví u Juliuse',
      description: 'Ut ut ut illum nobis dolorem.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Practical Rubber Salad',
    slug: 'Practical-Rubber-Salad',
    shortDesc: 'Dolore consequatur odio molestias quibusdam.',
    description:
      'Sequi animi fugit. Beatae consequatur debitis repellat eum qui accusantium omnis. Possimus repudiandae expedita quisquam velit nesciunt facere aperiam.\n \rConsequatur est sunt. Qui harum quia totam magni iusto. Porro ipsum asperiores reprehenderit accusantium et dignissimos et. Non ut assumenda perspiciatis in sapiente voluptatibus ut non et.\n \rOccaecati soluta laborum aut dolorum. Sed laborum et porro laudantium et. Alias et libero incidunt earum. Aliquid facilis ea inventore eos aut velit maiores velit facere.\n \rQui deserunt cum asperiores dolorem ut officia mollitia accusamus. Dicta et voluptas autem ratione sunt necessitatibus laborum consequatur. Et ad itaque molestiae velit totam quam vero. Ratione eius magnam eius debitis. Ipsa non ut veritatis consequatur repellat. Nihil voluptas ab beatae fugiat eos.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 519,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 22 },
    seo: {
      title: 'Practical Rubber Salad | Zahradnictví u Juliuse',
      description: 'Dolore consequatur odio molestias quibusdam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Intelligent Plastic Salad',
    slug: 'Intelligent-Plastic-Salad',
    shortDesc: 'Quidem aut recusandae.',
    description:
      'Perspiciatis ut accusantium dolore. Necessitatibus dolore non aperiam et est sequi saepe. Dolore eveniet impedit recusandae ex qui porro blanditiis earum. Sunt vel minus quaerat necessitatibus consequatur rerum. Et voluptas et amet provident provident ipsa saepe dolorum sapiente.\n \rEos ad esse dicta. Quia nemo tempore modi necessitatibus accusantium. Commodi qui quia vel aut unde eum qui. Quae quam impedit necessitatibus repellendus. Aut non dolor perspiciatis ab architecto expedita. Numquam neque sequi dolorem impedit non molestias.\n \rQui quod consectetur ut fugit voluptas tempora veniam voluptates. Quis ipsa voluptatem est ipsum vel sed. Magnam ad ut.\n \rQuia doloremque veritatis voluptas quia cupiditate ut voluptatem inventore. Nesciunt vel velit sequi odit corrupti sapiente quaerat. Soluta doloremque incidunt dignissimos possimus quam quo vel ipsa autem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 94 },
    seo: {
      title: 'Intelligent Plastic Salad | Zahradnictví u Juliuse',
      description: 'Quidem aut recusandae.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handmade Concrete Chicken',
    slug: 'Handmade-Concrete-Chicken',
    shortDesc: 'Molestiae voluptatem qui sed aut.',
    description:
      'Commodi eos in hic tenetur. Voluptatem facere ratione hic. Atque est et est iste maiores alias rerum debitis ipsum. Est debitis culpa nemo laudantium asperiores qui officiis perferendis dolorem.\n \rQuis quia suscipit ducimus voluptates ea sint voluptas. Cum corrupti quae omnis quisquam ipsam sit libero natus. Iure omnis totam unde perferendis recusandae facilis ratione consequatur molestiae. Dolor vero a omnis. Explicabo et sunt voluptatem.\n \rCumque ut repudiandae vero in. Architecto qui quibusdam. In dignissimos eum. Labore ea rem et repellendus a. Itaque aut ipsa. Debitis et velit et quia debitis praesentium.\n \rPossimus repellendus numquam. Aliquam accusamus ut dolorum placeat. Sit delectus ea id dolorum magnam aut adipisci. Sint amet aut debitis magni quidem. Blanditiis dolor ratione sunt nesciunt tempore expedita sapiente non dolore. Recusandae consectetur fugiat velit quia quod qui.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 8 },
    seo: {
      title: 'Handmade Concrete Chicken | Zahradnictví u Juliuse',
      description: 'Molestiae voluptatem qui sed aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Sleek Rubber Table',
    slug: 'Sleek-Rubber-Table',
    shortDesc: 'Qui itaque dicta numquam veniam qui amet.',
    description:
      'Corporis hic ut qui adipisci est maiores. Recusandae et nemo enim labore vero voluptas. Nostrum corporis nulla laudantium odit est. Quae amet doloremque. Voluptate eos architecto. Sit illo optio ad ut.\n \rRepellat non dolorum nemo veniam tempora. Itaque molestiae doloribus dolor sunt. Doloribus ut atque. Dolores quas dignissimos facilis qui est pariatur laborum et esse. Aperiam nemo quo quo quam iusto quidem.\n \rNesciunt aliquid officia molestiae. Est id eum. Veniam quae vel quam ut quibusdam aspernatur facere. Laudantium est odio velit nihil omnis voluptatem dolore. Qui est qui odit voluptatum praesentium.\n \rAut itaque ea. Consequatur non veritatis labore nihil exercitationem ullam sint mollitia. Vitae cupiditate libero magni quod qui alias ea facere.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 319,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 50 },
    seo: {
      title: 'Sleek Rubber Table | Zahradnictví u Juliuse',
      description: 'Qui itaque dicta numquam veniam qui amet.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Incredible Rubber Sausages',
    slug: 'Incredible-Rubber-Sausages',
    shortDesc: 'Facere quisquam non saepe rerum ratione.',
    description:
      'Aut vel error. Ipsam et nisi ab eaque. Magni et ab et aperiam. Atque fugit sed.\n \rEt nisi culpa molestiae facere magnam aut quisquam et. Rerum eligendi et quibusdam saepe ipsa. Porro non praesentium qui molestiae.\n \rCupiditate ut hic commodi omnis nobis. Sed et quo. Repellat non voluptatem nam iusto nobis mollitia ad vitae omnis. Quo neque qui consequatur possimus inventore quis nobis facere eveniet. Ex et omnis nobis ipsam. Est exercitationem hic maxime est temporibus.\n \rSed ut neque at nisi sunt eligendi sequi aperiam. Voluptatem repellendus debitis vel. Qui aliquid neque laudantium nulla minus modi cupiditate. Nostrum facere rerum dolore. Non natus architecto placeat occaecati quasi est esse.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 309,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 11 },
    seo: {
      title: 'Incredible Rubber Sausages | Zahradnictví u Juliuse',
      description: 'Facere quisquam non saepe rerum ratione.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Rubber Chicken',
    slug: 'Handcrafted-Rubber-Chicken',
    shortDesc:
      'Autem voluptas dolore rerum magnam est aperiam molestias saepe.',
    description:
      'Molestias autem maxime. Deleniti inventore ipsam et sunt ipsa. Repellat expedita odio quasi architecto dignissimos nulla molestiae. Laboriosam atque recusandae sint omnis voluptatem. Saepe ab qui quisquam blanditiis. Optio et placeat molestiae sunt.\n \rOccaecati amet amet quasi et sunt dolores natus. Ut ut veniam. Illo nulla iure quidem nemo nihil. Magni maiores perspiciatis quibusdam atque debitis id. Atque delectus voluptates sit itaque provident aspernatur incidunt reiciendis. Ullam ut odio a.\n \rEst qui earum odio beatae. Autem quia asperiores. Ut explicabo dolor.\n \rQuia non id aperiam sint perspiciatis. Molestiae vero dolorem aut aspernatur iste esse et aut consequatur. Suscipit ullam id quaerat minima facilis. Vitae repellendus consequatur repellat officia autem quo.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 77 },
    seo: {
      title: 'Handcrafted Rubber Chicken | Zahradnictví u Juliuse',
      description:
        'Autem voluptas dolore rerum magnam est aperiam molestias saepe.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Small Soft Gloves',
    slug: 'Small-Soft-Gloves',
    shortDesc: 'Est aut tempore quisquam blanditiis qui laudantium magnam.',
    description:
      'Voluptatibus cupiditate accusamus rem ullam tenetur enim deleniti. Similique est vel quae. Laborum repellendus nisi et quia error esse voluptatem. Voluptatibus quaerat consequatur ut consequatur labore provident. Vel sint sint in vel qui provident sequi.\n \rItaque eveniet culpa voluptatum delectus sapiente laudantium qui facilis eum. Distinctio laboriosam explicabo dolorum alias autem nemo sed ullam voluptate. Reiciendis tempora ut quidem. Eum ab consequatur sit qui dolores.\n \rQuam voluptas quo. Expedita adipisci ab occaecati omnis consequatur. Ea sed iure aspernatur cum quidem. Voluptate omnis omnis sunt est aperiam ullam molestiae recusandae doloribus. Deserunt aut maiores sint minus culpa sed.\n \rNatus repudiandae facilis exercitationem sit. Fugit voluptatem nam. Consequuntur ex nemo.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 68 },
    seo: {
      title: 'Small Soft Gloves | Zahradnictví u Juliuse',
      description: 'Est aut tempore quisquam blanditiis qui laudantium magnam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Ergonomic Soft Salad',
    slug: 'Ergonomic-Soft-Salad',
    shortDesc:
      'Dolores consectetur itaque ipsum pariatur sint amet eligendi impedit et.',
    description:
      'Aperiam illo consequatur praesentium similique reiciendis architecto. Officiis facilis occaecati ut. Et ea cupiditate et temporibus. Possimus cum sit repudiandae. Occaecati qui vel officiis asperiores consequatur.\n \rMolestias reiciendis autem fugiat qui. Molestiae qui asperiores eius fugiat voluptatem et. Debitis atque harum voluptate et. Nostrum architecto aut.\n \rDolores aut ipsum rerum labore cupiditate blanditiis illum. Est enim nobis reprehenderit impedit dolorum laudantium et. Explicabo ipsa temporibus. Nostrum praesentium a et omnis.\n \rIusto consequuntur eius architecto et. Molestiae rerum unde. Nulla quas est. Odit qui nihil id qui nesciunt dignissimos.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 209,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 65 },
    seo: {
      title: 'Ergonomic Soft Salad | Zahradnictví u Juliuse',
      description:
        'Dolores consectetur itaque ipsum pariatur sint amet eligendi impedit et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Steel Hat',
    slug: 'Sleek-Steel-Hat',
    shortDesc: 'Harum voluptatem officiis unde quia officia non nihil libero.',
    description:
      'Laudantium odit eaque quibusdam perspiciatis voluptatem perspiciatis occaecati. Itaque provident voluptate asperiores. Repellendus quas quis nemo explicabo mollitia in corporis.\n \rAmet exercitationem cupiditate similique et asperiores minima consequatur aut vel. Omnis quia delectus tempora atque laborum. Eligendi asperiores ut et quaerat molestiae. Maxime itaque accusantium et quasi quia praesentium soluta. Ratione quo pariatur.\n \rVoluptas voluptatem doloribus iure sint in quod corporis. Corporis vitae necessitatibus. Numquam tempore voluptates sit et dignissimos perspiciatis. Voluptatum nemo recusandae quo voluptatem laborum corrupti quod hic. Omnis vero natus enim quod repudiandae voluptate natus. Ab hic vitae rerum est ipsam.\n \rDoloribus aperiam doloribus eos. Sed recusandae deleniti. Sequi dolor recusandae id placeat cupiditate in non consectetur asperiores. Architecto at beatae. Porro id rerum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 51 },
    seo: {
      title: 'Sleek Steel Hat | Zahradnictví u Juliuse',
      description:
        'Harum voluptatem officiis unde quia officia non nihil libero.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Small Soft Shoes',
    slug: 'Small-Soft-Shoes',
    shortDesc:
      'Qui sunt reprehenderit sit sit repellendus tempore facilis dolore.',
    description:
      'Aperiam consequatur dignissimos dolor eius ex. Sint dolorum et quia et delectus quis nulla. Quae natus molestiae enim laboriosam est est asperiores aut sed.\n \rEst dolorem aut repudiandae nostrum natus. Eveniet quia eum quia dolorum qui consequatur. Distinctio iste quo iste asperiores. Veniam accusantium laudantium unde aut enim architecto maiores odit. Atque ipsam cum incidunt modi dolores rerum.\n \rMinima temporibus qui natus esse et mollitia. Quam itaque adipisci cum rerum expedita et non nostrum. Sapiente similique ipsum id culpa id molestiae impedit qui. Consequatur molestiae deleniti.\n \rUt rerum est. Ullam accusamus est molestias. Sint officia explicabo aspernatur. Nam mollitia minus quia quam qui nam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 100 },
    seo: {
      title: 'Small Soft Shoes | Zahradnictví u Juliuse',
      description:
        'Qui sunt reprehenderit sit sit repellendus tempore facilis dolore.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Unbranded Wooden Keyboard',
    slug: 'Unbranded-Wooden-Keyboard',
    shortDesc: 'Maxime expedita ea minima.',
    description:
      'Nisi aut velit ab nostrum aliquam sed nesciunt at. Enim illo consequuntur quia temporibus vel reiciendis. Ab est quia autem expedita est. Accusamus pariatur amet velit excepturi velit magnam sint ut. Eos voluptatem delectus dolorem corporis.\n \rAb aspernatur minima nihil aperiam et eveniet deserunt laudantium. Totam non exercitationem quidem. Autem consequatur eligendi quidem impedit quod esse officia ut repellendus. Quia et quos perspiciatis dolorem aut corrupti quasi. Voluptatibus consectetur labore hic.\n \rAnimi et eum quasi facere distinctio praesentium qui dignissimos cumque. Officiis facere officiis excepturi aliquam voluptas. Blanditiis culpa quasi eveniet. Alias tenetur enim delectus non non eum iure error. Quis deserunt ipsam laborum a ut dignissimos. Totam officia laborum maxime occaecati corporis voluptates.\n \rRem esse occaecati velit molestias est. Dolor autem quia et maiores magnam ut sed qui ducimus. Numquam placeat asperiores eos laboriosam sit inventore corporis voluptas illo. Numquam et earum architecto enim cumque omnis quo. Quia aut quia excepturi sed ut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 319,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 23 },
    seo: {
      title: 'Unbranded Wooden Keyboard | Zahradnictví u Juliuse',
      description: 'Maxime expedita ea minima.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Generic Granite Ball',
    slug: 'Generic-Granite-Ball',
    shortDesc: 'Tempora rerum aut dolore voluptas dolorem doloribus.',
    description:
      'Consectetur labore dolorum impedit neque molestias enim quae consequatur aspernatur. Nobis quia sed non inventore explicabo omnis et. Omnis nihil amet rerum quasi odio. Dolore voluptates nulla quia. Sequi et provident quod ut assumenda tempore soluta. Enim quas recusandae.\n \rAt natus sed harum unde voluptas consequatur debitis. Reiciendis harum magnam ab. Id vel placeat.\n \rVel sapiente laudantium hic ut labore sed corporis eaque qui. Repellat amet distinctio. Dolores omnis harum eum et cumque voluptatem aspernatur ut. Nesciunt natus omnis eos est ullam nesciunt voluptatum sunt. Autem architecto inventore enim unde voluptatum veritatis.\n \rQuidem unde repudiandae ea deserunt delectus. Voluptatem ipsum fugiat. Repellat magni voluptas modi vitae qui earum. Non nihil aut porro suscipit est molestias amet accusantium iure.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 149,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 12 },
    seo: {
      title: 'Generic Granite Ball | Zahradnictví u Juliuse',
      description: 'Tempora rerum aut dolore voluptas dolorem doloribus.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Awesome Soft Hat',
    slug: 'Awesome-Soft-Hat',
    shortDesc: 'Quo assumenda rerum qui eaque suscipit.',
    description:
      'Nihil numquam quaerat non qui maxime. Fuga labore nemo aut. Facilis itaque eius. Est tempora ab aut.\n \rDolore debitis aut dicta corrupti in dolor nam harum. Voluptates inventore molestiae sapiente nisi. Quia nobis possimus. Praesentium rerum quia molestiae omnis totam quam.\n \rDicta dicta sunt. Eligendi quod ex provident veniam beatae eaque illo sequi impedit. Blanditiis suscipit est nulla ratione quo.\n \rMinus est eius quis. Eius corrupti similique iste vero quia qui. Id qui illo nihil consequatur repudiandae. Eius quam officia sapiente ducimus dicta veniam impedit consequatur. Excepturi accusamus sint quod. Sint qui a dignissimos.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 219,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 47 },
    seo: {
      title: 'Awesome Soft Hat | Zahradnictví u Juliuse',
      description: 'Quo assumenda rerum qui eaque suscipit.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handmade Wooden Ball',
    slug: 'Handmade-Wooden-Ball',
    shortDesc: 'Vero praesentium ipsam fuga quibusdam incidunt in.',
    description:
      'Voluptas consequatur magni voluptas sunt quas. Qui at ut. Esse et doloremque commodi et enim. Corporis natus facere fugiat modi architecto explicabo dolor.\n \rAliquam ad sit et atque. Itaque dolorum voluptas. Voluptatem itaque et ut consequatur facilis. Inventore commodi modi vel et sit voluptas enim temporibus. Asperiores itaque doloribus sed placeat numquam numquam amet eveniet quibusdam.\n \rSequi soluta ratione velit repellendus eaque ut optio. Labore unde ratione maxime adipisci ipsam. Ut atque ipsum ut ea voluptatum. Eos numquam in repellendus ea consequuntur repellat totam dolorem dicta. Omnis id ullam aliquid corrupti tempora. Quia vero omnis est molestiae asperiores expedita ut.\n \rDicta est quisquam soluta aut quia eum eaque consectetur. Debitis doloremque praesentium optio sit eos nam sit quia. Quo rerum recusandae aut deleniti qui cupiditate possimus natus quia. Est rem illum et.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 129,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 12 },
    seo: {
      title: 'Handmade Wooden Ball | Zahradnictví u Juliuse',
      description: 'Vero praesentium ipsam fuga quibusdam incidunt in.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Rustic Soft Soap',
    slug: 'Rustic-Soft-Soap',
    shortDesc: 'Quibusdam exercitationem ut.',
    description:
      'Impedit dolor consequatur temporibus sed minima. Voluptas fuga possimus ad sit qui itaque alias. Hic et autem quo sed.\n \rVoluptas occaecati exercitationem voluptatibus neque at. Similique unde aspernatur atque quo unde. Ratione perspiciatis ratione amet non in velit voluptatum eos. Quo fugiat vel ullam sint quia. Voluptas officia accusantium quis tenetur ut unde nesciunt ratione.\n \rExcepturi voluptate temporibus consequatur libero repellendus sed recusandae laboriosam asperiores. Pariatur tempora exercitationem. Maxime similique laboriosam non non quia tempora consequatur quam. Vel maiores vel recusandae ducimus nemo quae mollitia. Deleniti dolor et sunt doloribus commodi aut ut maxime.\n \rVoluptatem expedita et cum omnis iste unde vel aut. Aut incidunt suscipit. Est quo aut eum non delectus. Quia mollitia sed vel debitis. Nisi in perspiciatis ea possimus fugiat. Magnam occaecati rerum tempora expedita dolorum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 409,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 35 },
    seo: {
      title: 'Rustic Soft Soap | Zahradnictví u Juliuse',
      description: 'Quibusdam exercitationem ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Incredible Frozen Car',
    slug: 'Incredible-Frozen-Car',
    shortDesc: 'Rem quos consequatur sit inventore quia.',
    description:
      'Eius voluptas sequi. Reiciendis maxime sint. Eligendi in magnam officia reprehenderit magni non voluptatem libero. Aut voluptate deserunt dolores autem laboriosam.\n \rEum officiis quia rerum labore nesciunt nam ut quae nihil. Est sint nam at et aut quasi illo illo dolorum. Deserunt reiciendis esse necessitatibus sit dolorum. Tempora atque dolor quos unde perferendis placeat. Impedit enim laborum sequi eius dolorum alias. Quasi in labore ad.\n \rMagni et numquam. Est ut eum unde inventore iusto. Consectetur expedita rerum eum. Veniam accusantium rerum sequi odio ratione minus. Sit est cumque assumenda nisi saepe.\n \rQuidem aut repellendus assumenda quisquam eius aut. Dolore ducimus dolores qui excepturi numquam rem aliquam. Maiores dolorem molestiae tempora vitae.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 589,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 4 },
    seo: {
      title: 'Incredible Frozen Car | Zahradnictví u Juliuse',
      description: 'Rem quos consequatur sit inventore quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Licensed Cotton Bacon',
    slug: 'Licensed-Cotton-Bacon',
    shortDesc: 'Et repellat incidunt tempora.',
    description:
      'Pariatur optio velit dolores magni sed non est dignissimos. Ratione unde molestiae dolor debitis ex id harum aperiam similique. Est voluptas unde culpa. Dolorum dolores earum ipsa illum dolorem nostrum. Dolorum fugiat quo sed odio.\n \rAdipisci possimus aliquam commodi voluptas praesentium omnis perferendis ipsum sit. Tempore et qui necessitatibus. Aut qui aliquam sequi aut omnis rerum earum inventore libero. Nihil necessitatibus rerum ea et. Dicta quas voluptatum cum sint voluptate fugiat vitae enim. Commodi expedita voluptatem.\n \rIn debitis velit qui est nam repudiandae ut architecto pariatur. Eius odit voluptate et ipsum omnis qui corrupti quasi qui. Maxime nostrum eius enim.\n \rEarum molestiae impedit mollitia vel dolorem laboriosam cumque natus. Corrupti magni rerum laboriosam ut dolore sint. Vel dolor quaerat doloribus ut perspiciatis voluptates ea tenetur ut. Quia vel in porro quas incidunt et alias. Molestias minima repellendus sit suscipit aliquid consequuntur. Et dolor voluptate vel voluptate qui ducimus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 30 },
    seo: {
      title: 'Licensed Cotton Bacon | Zahradnictví u Juliuse',
      description: 'Et repellat incidunt tempora.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Concrete Shirt',
    slug: 'Gorgeous-Concrete-Shirt',
    shortDesc: 'Amet quas natus omnis et.',
    description:
      'Ipsam est adipisci. Tempore vero rerum. In rem voluptatibus nemo earum eaque molestiae repellendus.\n \rConsequatur vel nostrum modi assumenda ea impedit distinctio. Iure omnis eius. Qui repudiandae molestiae itaque necessitatibus. Ea vitae rerum veritatis dolorem.\n \rSed aliquam eum unde. Voluptatem facilis reprehenderit rerum recusandae ut. Facilis saepe doloremque veritatis dolorem commodi autem sit. Dolorem sit autem. Porro eos quia ex ut hic non quasi. Cupiditate et minus ex ducimus harum ab maxime.\n \rAut est dicta. Inventore dolorem quas quia. Libero praesentium exercitationem voluptatum corporis et quis. Necessitatibus facilis omnis. Consequatur molestias incidunt at possimus a.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 159,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 90 },
    seo: {
      title: 'Gorgeous Concrete Shirt | Zahradnictví u Juliuse',
      description: 'Amet quas natus omnis et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fantastic Cotton Shirt',
    slug: 'Fantastic-Cotton-Shirt',
    shortDesc: 'Et odit sequi eligendi saepe et commodi quibusdam ullam quia.',
    description:
      'Qui quo occaecati perferendis et. Doloribus aut veniam aut rem inventore voluptatem fuga placeat. Assumenda error quia hic quidem atque non maxime asperiores.\n \rEt repellat eaque consequuntur qui autem sint. Est asperiores nostrum in sit quidem voluptates assumenda non maiores. Doloremque dolores voluptatibus reprehenderit facere eos omnis error. Rem beatae iusto magni dolorem.\n \rAut aut iure quae autem architecto beatae ratione cum maxime. Explicabo illum voluptatem aut excepturi alias neque laudantium. Dolor assumenda nesciunt non illum ratione.\n \rAutem sunt dolor vel dolore est itaque magni quia nemo. In eos animi quos non velit id saepe earum commodi. Fugiat cupiditate quae non voluptatem et qui iure dolores culpa.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 139,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 17 },
    seo: {
      title: 'Fantastic Cotton Shirt | Zahradnictví u Juliuse',
      description:
        'Et odit sequi eligendi saepe et commodi quibusdam ullam quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Unbranded Frozen Keyboard',
    slug: 'Unbranded-Frozen-Keyboard',
    shortDesc: 'Repudiandae dignissimos quo aut non quia.',
    description:
      'Iusto harum ut iure eligendi. Reprehenderit error eligendi nobis magni omnis aut voluptatibus. Labore dolorem animi voluptas doloribus accusamus illo quasi. Aut voluptatem ea eos praesentium asperiores. Qui quia nam fuga totam. Sit ut reprehenderit quaerat quod eos sequi.\n \rSimilique nemo iure qui aliquid pariatur aperiam voluptates pariatur. Aut consectetur qui voluptatem eligendi. Vero vero iure earum reprehenderit id dolore beatae. Aut voluptatem et explicabo autem.\n \rNobis enim non. Voluptate aspernatur quam commodi. Fuga autem quo quos eius nemo aut velit facilis. Perferendis perferendis omnis nihil atque hic. Quos sed dicta autem aut molestiae nulla dolor ut.\n \rAut quae fugit corrupti occaecati. Delectus odit ea et enim. Et reprehenderit itaque fuga facere quo. Ea ipsa rerum cupiditate suscipit itaque ipsam. Recusandae non laboriosam soluta dolores veniam dolorem. Consequatur omnis fuga eligendi corporis illum numquam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 129,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 86 },
    seo: {
      title: 'Unbranded Frozen Keyboard | Zahradnictví u Juliuse',
      description: 'Repudiandae dignissimos quo aut non quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Tasty Cotton Chicken',
    slug: 'Tasty-Cotton-Chicken',
    shortDesc: 'Aut ut vel dolorum assumenda mollitia eaque.',
    description:
      'Aut neque eveniet voluptates ea provident quas. Eveniet et voluptatem doloremque autem eveniet sit molestiae. Eveniet porro dolorum impedit modi aut minus quis ea. Placeat commodi et consectetur voluptas distinctio. Velit in sed ex laborum molestias mollitia at voluptate maxime. Assumenda in aut consequatur ipsa veritatis quo expedita.\n \rExcepturi ipsam non nulla rerum. Qui eius aliquid et repellat aliquam aut rerum aut et. In excepturi quia est sed. Reiciendis et soluta omnis blanditiis nisi consequuntur.\n \rError velit officiis totam unde cumque minima quas temporibus. Itaque autem a mollitia et sit. Autem ut nesciunt eos labore facilis odit maxime repellendus omnis. Quaerat ullam recusandae et accusamus nam temporibus eveniet similique minus. Exercitationem asperiores expedita. Officia non rerum eaque voluptas.\n \rEt accusantium quod asperiores doloremque autem consequuntur ipsum unde. Voluptatem ad quisquam voluptatem est earum. Sed repellendus quis sint placeat eum voluptatem pariatur reiciendis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 19,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 57 },
    seo: {
      title: 'Tasty Cotton Chicken | Zahradnictví u Juliuse',
      description: 'Aut ut vel dolorum assumenda mollitia eaque.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Small Plastic Pizza',
    slug: 'Small-Plastic-Pizza',
    shortDesc: 'Delectus nemo consequuntur eius aut earum vel excepturi.',
    description:
      'Et laboriosam animi. Aut quo magni consequuntur incidunt quae. Modi temporibus et ut et laboriosam doloribus repudiandae eos. Harum adipisci et quas animi veritatis.\n \rQui voluptatibus iste. Enim minus quam nam voluptatem quis recusandae consequatur praesentium. Ut quo molestiae placeat excepturi ex ducimus sint odio. Maiores et nihil expedita omnis autem.\n \rQuia eos doloremque rerum doloremque eius aut praesentium incidunt repudiandae. Aut fugiat quia dolores velit ducimus maiores veritatis. Dolorum repellat quia quia cupiditate laboriosam ut sint et. Illum quidem in eveniet nihil vero occaecati debitis in voluptates. Qui repellat porro dolorum consequatur eos voluptatem non.\n \rEt aperiam facere. Rerum iure non commodi et perspiciatis. Voluptatibus est reprehenderit vel velit quia modi. Modi praesentium aut sunt sed dolorem voluptatem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 24 },
    seo: {
      title: 'Small Plastic Pizza | Zahradnictví u Juliuse',
      description: 'Delectus nemo consequuntur eius aut earum vel excepturi.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Rustic Frozen Car',
    slug: 'Rustic-Frozen-Car',
    shortDesc: 'Illo velit qui aut.',
    description:
      'Voluptatem ut nisi pariatur quas. Nisi corrupti provident quis at officiis voluptatem quo est. In est eius id nihil similique beatae sunt nihil ut. Debitis est voluptatibus temporibus. Qui dolores dolorum fugiat.\n \rIn quo et aut. Nemo est delectus sapiente sit autem dolore nihil. Itaque blanditiis est qui.\n \rPerspiciatis nihil vero ullam dolores pariatur quibusdam placeat. Ut impedit suscipit ea qui odio. Repudiandae similique repellendus repudiandae consequatur asperiores. Ut nisi rem. Ullam et ut vero velit harum veritatis.\n \rModi architecto dolorem veritatis voluptatem possimus. Officia alias voluptatem. Repudiandae commodi omnis quo. Et qui natus amet. Modi placeat eius ducimus ea accusamus. Architecto atque omnis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 179,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 100 },
    seo: {
      title: 'Rustic Frozen Car | Zahradnictví u Juliuse',
      description: 'Illo velit qui aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Incredible Fresh Gloves',
    slug: 'Incredible-Fresh-Gloves',
    shortDesc: 'Sunt tenetur adipisci dignissimos aspernatur ut sit quasi.',
    description:
      'Perspiciatis sequi dignissimos et deserunt blanditiis laborum. Voluptatem veniam maxime veritatis fugit nihil in velit sed voluptatem. Illo mollitia sequi non voluptas. Perspiciatis impedit distinctio neque temporibus eos consectetur quia. Odio nemo eaque maiores similique et.\n \rUt illo quia id minima et blanditiis ut ut. Et facere incidunt magni odio quia vero odio. Nemo est enim. Officiis sunt maxime rerum aut iusto sunt soluta voluptatem cum.\n \rMinima voluptas debitis rerum incidunt. Quae cum harum. Et quo ipsum provident explicabo iure velit dolores porro.\n \rQuia provident voluptates quam esse vero repellat. Est nostrum eos deserunt amet. Consequatur ea earum ut cum. Consequatur asperiores laudantium dolores eligendi a consequatur. Vitae quis ducimus cumque non omnis. Cum id laboriosam magni dolores maiores odit expedita adipisci.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 94 },
    seo: {
      title: 'Incredible Fresh Gloves | Zahradnictví u Juliuse',
      description: 'Sunt tenetur adipisci dignissimos aspernatur ut sit quasi.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Intelligent Wooden Table',
    slug: 'Intelligent-Wooden-Table',
    shortDesc: 'Et est repudiandae et asperiores sit.',
    description:
      'Enim similique sapiente voluptatem et aut nisi est ut. Praesentium rerum ullam quasi non culpa ex illo laboriosam. Eius officiis aut blanditiis maiores deserunt ad voluptates voluptatem voluptatem. Neque nesciunt accusamus aut est at corrupti doloremque consequatur facere. Id autem cupiditate repudiandae fugiat eum ea quam porro repellat. Possimus sit nihil non incidunt est aperiam voluptatem a corporis.\n \rAt est sequi repellendus et enim dicta et eos. Incidunt voluptas nisi qui. Molestias facere qui est rem aut. Ipsa excepturi harum impedit autem cum impedit et et impedit. Porro quos eligendi et necessitatibus reprehenderit.\n \rQuo nisi aut. Rem nulla assumenda odit esse praesentium animi incidunt voluptates ullam. Fuga soluta iusto eius suscipit. Sequi nisi ipsum quod magni aliquid.\n \rAperiam soluta laboriosam harum dolor cum. Deserunt autem occaecati consequatur. Fugit placeat sed rerum delectus numquam. Error error voluptatem itaque aut officia. Minima repellendus consequatur non. Aliquid dolores ad harum fugit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 51 },
    seo: {
      title: 'Intelligent Wooden Table | Zahradnictví u Juliuse',
      description: 'Et est repudiandae et asperiores sit.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Intelligent Soft Shirt',
    slug: 'Intelligent-Soft-Shirt',
    shortDesc: 'Qui in beatae iusto non quae aut aperiam dicta non.',
    description:
      'Dolorem eos voluptate laudantium illum illum explicabo voluptatem est. Culpa fugiat eligendi corrupti consequatur consequuntur. Accusamus commodi qui enim in qui.\n \rAccusamus quos dolor sunt ex nemo eligendi voluptatem aut. Natus quibusdam vitae ut. Molestias non ut fuga modi. Itaque aperiam cumque id sed et esse rerum quidem.\n \rOccaecati commodi inventore rerum ut. Cumque deleniti fugiat aut tenetur. Qui natus ut quod. Et labore repudiandae at. Laboriosam non quasi consequuntur tempore velit autem. Quis quibusdam ab minima fugiat laudantium cum amet rem.\n \rHarum nihil sint. Voluptates ex aut sapiente ipsum eos esse. Saepe minus est voluptas consequuntur.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 469,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 40 },
    seo: {
      title: 'Intelligent Soft Shirt | Zahradnictví u Juliuse',
      description: 'Qui in beatae iusto non quae aut aperiam dicta non.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Practical Fresh Table',
    slug: 'Practical-Fresh-Table',
    shortDesc: 'Maiores maxime maiores ullam pariatur placeat quae et.',
    description:
      'Sit id recusandae ut ipsum error laborum et. Consectetur ut culpa nostrum asperiores molestias aliquid et. Pariatur quis alias qui est adipisci tenetur libero pariatur. Est perferendis qui repellendus.\n \rEt tenetur dicta non atque accusantium officiis beatae vel perferendis. Placeat harum ipsum in. At reprehenderit ea ratione. Et unde aspernatur sit sint repellat.\n \rVoluptatem eum repudiandae numquam hic aliquid tempora itaque aut. Consequatur exercitationem beatae omnis distinctio. Et et veritatis consequatur ut consequatur voluptas voluptatibus non voluptatem.\n \rAutem officia quod. Quae et labore aliquam adipisci voluptas saepe. Et consectetur numquam recusandae et amet. Voluptas totam non quisquam voluptatem sapiente ut. Ut debitis debitis aliquid voluptate facilis occaecati ratione adipisci.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 24 },
    seo: {
      title: 'Practical Fresh Table | Zahradnictví u Juliuse',
      description: 'Maiores maxime maiores ullam pariatur placeat quae et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Ergonomic Granite Soap',
    slug: 'Ergonomic-Granite-Soap',
    shortDesc: 'Id enim consequatur et aut.',
    description:
      'A saepe ut non et aut ex. Itaque officia facilis enim a tempora maiores et. Sequi possimus maiores ut nemo qui nobis aperiam. Reprehenderit ipsam fuga nam et libero nesciunt quia.\n \rVelit et nulla dolor. Suscipit quis repellat. Reiciendis laboriosam rerum modi nobis in aut. Est sed officiis perferendis consequatur consequuntur. Cumque ipsum ratione. In necessitatibus officia autem.\n \rMagni qui eos alias molestiae. Est blanditiis optio voluptatum tenetur laboriosam. Quo ipsam culpa. Ut est vero adipisci aut qui accusamus maiores possimus. Distinctio modi porro. Eius odit exercitationem explicabo molestiae dolores adipisci et.\n \rMollitia et eaque. Distinctio qui nobis aliquam quaerat vitae. Deleniti optio sed at. Delectus quisquam velit dolorum magnam. Ipsam ab rem repellat.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 179,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 46 },
    seo: {
      title: 'Ergonomic Granite Soap | Zahradnictví u Juliuse',
      description: 'Id enim consequatur et aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Rubber Chair',
    slug: 'Handcrafted-Rubber-Chair',
    shortDesc: 'Sit eum commodi.',
    description:
      'Ab cum quasi similique saepe officiis sed ipsam ut eos. Voluptatibus eos qui numquam. Asperiores deleniti necessitatibus quia eos aut. Odio dolores dolores voluptatibus et. Et sunt eveniet nemo molestiae quos optio sed.\n \rEsse dolor molestias non dolore porro. Et labore unde et iure quo beatae voluptatem voluptatum distinctio. Voluptas voluptas consectetur ab aut tempora asperiores laborum. Voluptatum natus labore aut.\n \rUt illo nobis provident eligendi alias architecto ut culpa nihil. Voluptatem ullam neque voluptate occaecati sequi sed sit ipsa recusandae. Esse maiores excepturi vitae. Perspiciatis et ratione veritatis natus et et aperiam. Odio sint molestiae omnis et veritatis debitis.\n \rMolestiae voluptatem laborum voluptatem omnis nihil. Sint nobis hic accusamus dignissimos. Accusantium beatae et in sunt possimus laudantium. Commodi nobis culpa sequi deserunt optio nam ut a a.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 559,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 76 },
    seo: {
      title: 'Handcrafted Rubber Chair | Zahradnictví u Juliuse',
      description: 'Sit eum commodi.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Wooden Towels',
    slug: 'Rustic-Wooden-Towels',
    shortDesc: 'Dolore repudiandae qui assumenda.',
    description:
      'Ut minus amet id quidem eligendi qui. Velit vero officia est quia voluptatum aspernatur aliquid possimus. Voluptatem incidunt ab ut fuga beatae architecto.\n \rIpsum exercitationem ab quo eum. Modi dolor nihil ea adipisci exercitationem ullam ut ab ut. Ex voluptatibus consequatur. Et ut omnis minima vitae vel provident harum accusamus. Ipsam quas tempora. Perferendis velit tempore suscipit vel reiciendis qui facere dolores.\n \rQui ullam sed modi et sunt sed itaque. Optio consequatur at molestias ut recusandae omnis. Inventore et consequatur dolorem voluptatem fugiat delectus temporibus quis. Tempore perferendis nisi explicabo aliquid doloribus deleniti necessitatibus. Molestias possimus et vero quia eos ratione ut sit dolor. Repudiandae optio sint voluptatem.\n \rEt officia eligendi et officiis eius quidem ut molestiae. Sit dicta numquam quaerat autem. Iste dolores perspiciatis facilis. Rem amet debitis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 469,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 11 },
    seo: {
      title: 'Rustic Wooden Towels | Zahradnictví u Juliuse',
      description: 'Dolore repudiandae qui assumenda.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Licensed Fresh Chair',
    slug: 'Licensed-Fresh-Chair',
    shortDesc: 'Magnam et id est.',
    description:
      'Et vel nesciunt quia doloremque error consectetur aut. Vel aut voluptas autem officiis quia omnis. Rem reiciendis voluptates possimus autem iusto. Accusamus illo velit ut voluptas tenetur voluptas nulla. Iste deserunt fugiat occaecati.\n \rConsequuntur vitae repellat molestiae autem eum neque. Quo cum repellendus. Quia itaque necessitatibus delectus dolor quod.\n \rSapiente illum est sit in ratione nobis nihil nostrum beatae. Repudiandae dolorem voluptas nisi tenetur aut. Corporis dolor adipisci et eum.\n \rVero fugit et repellendus. Fuga vel perferendis libero vitae. Quo animi ducimus. Laborum quaerat vel est.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 49,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 12 },
    seo: {
      title: 'Licensed Fresh Chair | Zahradnictví u Juliuse',
      description: 'Magnam et id est.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Small Cotton Chair',
    slug: 'Small-Cotton-Chair',
    shortDesc: 'Sunt tempore qui autem voluptatem ipsam ex quaerat.',
    description:
      'Animi qui totam rem totam sint. Quibusdam molestias maiores eos aut dolore nam dolorem ipsa nulla. Ut accusantium et. Non et in rerum occaecati delectus dolore. Iusto voluptatum sit ipsam.\n \rMolestias fugit officia quod. Minus tenetur velit aut enim itaque incidunt nobis. Est quod et. Velit voluptas eius. Suscipit nisi non maiores assumenda optio beatae esse qui. Iure unde nobis voluptatem quis esse.\n \rAtque rerum itaque ut est. Illo alias saepe eos quos dolore quae esse ipsa similique. Soluta nulla accusamus commodi sequi nam quae. Est natus quos quod at et consectetur voluptates sit. Veritatis laborum illo autem voluptatum. Error et aut vel et.\n \rAccusamus repellat praesentium distinctio molestiae doloremque. Consequatur et voluptatem est. Placeat earum dolor. A facere asperiores. Consequatur voluptatibus cum et repudiandae.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 559,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 24 },
    seo: {
      title: 'Small Cotton Chair | Zahradnictví u Juliuse',
      description: 'Sunt tempore qui autem voluptatem ipsam ex quaerat.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Handcrafted Rubber Keyboard',
    slug: 'Handcrafted-Rubber-Keyboard',
    shortDesc:
      'Placeat repellat doloribus et rerum et voluptas nesciunt libero itaque.',
    description:
      'Voluptatem minus magni hic maxime quod autem ullam dolores. Accusamus qui nisi reiciendis ullam. Beatae sequi aut dolorum at.\n \rNemo qui eos sunt ex assumenda consectetur eos sed. Quidem est ut sed. Nobis vel accusamus deleniti sint. Debitis voluptates excepturi eum velit vitae consequatur. Ut dolorum id suscipit molestias modi.\n \rA exercitationem dolore libero consequatur fuga commodi distinctio illo. Cupiditate molestiae excepturi sunt. Odit ipsam et nihil est et totam.\n \rSint nihil praesentium et et quis ut dolores. Non cum et voluptatem totam qui. Consequatur repellat totam. Commodi rerum sapiente et eveniet quo eaque. Quae quae itaque repellendus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 46 },
    seo: {
      title: 'Handcrafted Rubber Keyboard | Zahradnictví u Juliuse',
      description:
        'Placeat repellat doloribus et rerum et voluptas nesciunt libero itaque.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Incredible Concrete Chicken',
    slug: 'Incredible-Concrete-Chicken',
    shortDesc: 'Qui ratione non dolorum quisquam consequatur.',
    description:
      'Culpa eius suscipit consectetur sint sunt nostrum non ut alias. Soluta quis architecto distinctio sint enim error optio. Ipsum eveniet suscipit maiores sequi aut possimus vero ullam eius. Illo rerum quo quod.\n \rVoluptatem odit velit voluptates commodi ducimus aut. Enim alias sed earum vel laborum quia assumenda odio. Earum qui veniam eveniet dolorem aperiam voluptatum. Voluptatem a sint voluptate dolor non dignissimos tenetur odio incidunt. Omnis incidunt ullam consequatur quia sunt harum assumenda saepe. Est rerum nesciunt.\n \rVoluptatem molestiae provident dignissimos earum impedit id aut. Placeat blanditiis sed voluptatum. Iure ut amet. Qui labore consequuntur accusamus.\n \rEt nemo dolore molestiae. Quam dolore quidem in suscipit nesciunt. Ducimus culpa esse reprehenderit aspernatur nobis atque enim. Dolores placeat quo officiis sunt delectus consequatur veritatis. Et voluptatem officiis quo vel qui tenetur.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 309,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 79 },
    seo: {
      title: 'Incredible Concrete Chicken | Zahradnictví u Juliuse',
      description: 'Qui ratione non dolorum quisquam consequatur.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Sleek Concrete Gloves',
    slug: 'Sleek-Concrete-Gloves',
    shortDesc: 'Consectetur rerum quae.',
    description:
      'Voluptates id molestias tempore atque numquam. Qui animi exercitationem. Dignissimos amet et officiis animi.\n \rOfficia omnis tempore et qui commodi vero aut qui et. Quis error autem. Sunt impedit ipsam cum. Et optio ut dolor quis maiores accusantium id et repellendus. Omnis officiis sint sequi temporibus. Nulla ab ea fugit nihil et consequatur sit.\n \rLibero reiciendis dolor pariatur sed earum et dolorem fugiat possimus. Quo autem ab facilis ipsam quae corrupti eos est. Earum et voluptatem voluptas nesciunt incidunt qui aut. Totam qui suscipit quidem rerum atque necessitatibus minus optio qui. Error quae velit et ratione et animi velit assumenda aspernatur. Porro dolore labore cumque necessitatibus.\n \rEsse odio odio omnis sint aliquid placeat. Facilis velit distinctio voluptate omnis laudantium reiciendis soluta maxime saepe. Modi sapiente quasi.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 12 },
    seo: {
      title: 'Sleek Concrete Gloves | Zahradnictví u Juliuse',
      description: 'Consectetur rerum quae.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Unbranded Plastic Car',
    slug: 'Unbranded-Plastic-Car',
    shortDesc:
      'Repellendus eveniet modi rerum dolores enim illo dolore vel eveniet.',
    description:
      'Fugit vel accusamus facilis qui. Cupiditate aut saepe minima. Ut vitae veritatis eum reprehenderit. Sequi explicabo et sed fuga molestias libero. Sit sunt sunt iste architecto omnis. Deleniti nulla voluptas hic.\n \rVoluptatem et veniam dolores quia voluptatibus possimus necessitatibus incidunt occaecati. Id vel ex recusandae et adipisci. Aliquid enim minima officia autem.\n \rModi quia voluptatem voluptatibus aperiam possimus. Alias corrupti consequatur impedit aperiam ut nihil neque. Culpa aliquid non et aut necessitatibus explicabo reiciendis. Eos et laudantium quos. Sed repellat qui est et possimus. Tempore dolore quam est voluptatem voluptate assumenda non laboriosam magnam.\n \rEst consequatur dolorem facilis fuga numquam voluptas libero. Porro nesciunt quibusdam. Quia cupiditate enim consequatur tenetur voluptatem adipisci vel dolores. Voluptate quos ipsa fuga doloribus expedita nemo asperiores iure.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 439,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 57 },
    seo: {
      title: 'Unbranded Plastic Car | Zahradnictví u Juliuse',
      description:
        'Repellendus eveniet modi rerum dolores enim illo dolore vel eveniet.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Intelligent Fresh Shoes',
    slug: 'Intelligent-Fresh-Shoes',
    shortDesc: 'Mollitia quaerat sint aperiam veritatis.',
    description:
      'Aperiam repellendus voluptatum. Impedit dolor ut qui consequatur praesentium a ullam officiis. Pariatur illum voluptatum porro molestiae laudantium qui vel aperiam. Omnis cumque perspiciatis ut et libero sed aut.\n \rVoluptatem sed omnis. Atque ratione est. Consequuntur optio hic ullam omnis. Ipsam sequi numquam et labore quia cumque fuga labore aut.\n \rVeniam quas rerum qui odit molestiae accusamus alias blanditiis velit. Sint assumenda alias architecto dolorem excepturi consequatur vitae. Dolorum odio dolor sunt consequuntur.\n \rConsequatur saepe rerum iusto. Nisi fugit et autem mollitia sint ea blanditiis cum. Sequi consequuntur quia et. Facere saepe doloremque autem voluptas fugiat nesciunt eum. Repudiandae est laudantium aut eos quam eius reiciendis. Illo quod labore.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 36 },
    seo: {
      title: 'Intelligent Fresh Shoes | Zahradnictví u Juliuse',
      description: 'Mollitia quaerat sint aperiam veritatis.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Awesome Steel Gloves',
    slug: 'Awesome-Steel-Gloves',
    shortDesc: 'Omnis minima sunt et voluptas officia.',
    description:
      'Minus dolore nostrum harum. Voluptatem quibusdam sint unde repudiandae aut minus unde voluptas nihil. Fugiat omnis qui quis qui ea quisquam in sunt. Laudantium voluptate enim commodi omnis quia. Nam illo voluptates sapiente nesciunt consequatur. Cupiditate aut est quia est qui vel.\n \rQuasi est provident id perferendis exercitationem facere iure. Nesciunt quod quia eos harum enim quae. Sint voluptates aspernatur sed atque.\n \rSunt voluptatem aut adipisci explicabo corrupti. Molestiae consequatur voluptatibus aliquid explicabo qui. Nulla sint facere.\n \rIure animi deserunt saepe fugit ea deserunt saepe dignissimos ut. Laudantium voluptatum ut. Blanditiis enim possimus totam ut accusantium ad.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 49 },
    seo: {
      title: 'Awesome Steel Gloves | Zahradnictví u Juliuse',
      description: 'Omnis minima sunt et voluptas officia.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Generic Plastic Gloves',
    slug: 'Generic-Plastic-Gloves',
    shortDesc: 'Quia asperiores quibusdam.',
    description:
      'Ut vel quas suscipit quibusdam delectus iure assumenda. Reprehenderit tempora eum ut. Commodi nisi veniam. Quisquam ad voluptatem magni et vitae molestiae. Possimus sed ad atque.\n \rDucimus cum aut. Corporis vel fugit praesentium quaerat necessitatibus eaque. Quam asperiores ut nam repellendus alias qui dolore. Vel consequatur hic beatae et iusto soluta consequuntur illo ut. Ut quos odio animi. Rerum veniam voluptatem autem a assumenda.\n \rNam ab explicabo et nam incidunt omnis et quas sint. Numquam assumenda deserunt sit sunt qui vitae fugit. Illum at aperiam recusandae possimus illum dicta ipsam.\n \rAnimi eligendi minima voluptas ut et id accusamus quisquam. Deserunt hic odio magnam ratione magnam rerum aut. Voluptates non qui veniam alias architecto soluta vel quasi.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 7 },
    seo: {
      title: 'Generic Plastic Gloves | Zahradnictví u Juliuse',
      description: 'Quia asperiores quibusdam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Plastic Cheese',
    slug: 'Practical-Plastic-Cheese',
    shortDesc: 'Sint a delectus.',
    description:
      'Dolor distinctio ipsam aut officiis rerum. Fuga ut tempora dolorem sit dolor nobis dolorum. Velit quos maiores est.\n \rDolorem dolores perferendis. Totam et nihil ut nemo. Quis consequatur aut commodi ad.\n \rExpedita maxime et tenetur esse repellendus ad. Architecto ipsam voluptas ipsam aut. Ipsam sapiente libero ipsa.\n \rAmet sed est necessitatibus laborum ut esse minima eligendi. Similique est accusantium pariatur cum quo asperiores. Et distinctio et rerum sapiente et. Vitae voluptate omnis et dolor a. Delectus et sunt nostrum neque labore quis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 409,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 68 },
    seo: {
      title: 'Practical Plastic Cheese | Zahradnictví u Juliuse',
      description: 'Sint a delectus.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Licensed Fresh Computer',
    slug: 'Licensed-Fresh-Computer',
    shortDesc:
      'Consectetur quos incidunt quidem fugiat cumque dignissimos perferendis mollitia repellat.',
    description:
      'Et itaque ut natus voluptatem eligendi nobis et ut. Incidunt architecto commodi et. Eaque nostrum saepe exercitationem.\n \rRepudiandae voluptatem laudantium totam minima officia. Sit commodi repellendus molestiae sed eaque. Ad dolore autem saepe vel est doloribus.\n \rEt in aliquid fuga iste porro saepe voluptatem perspiciatis. Unde vel aut tempore ea laborum. Est dolores dolorum.\n \rQuo quia repellendus aspernatur rerum ut eius. Consequatur ut assumenda omnis sunt id quae sapiente. Quia voluptatem expedita ad voluptatibus qui voluptates.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 549,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 98 },
    seo: {
      title: 'Licensed Fresh Computer | Zahradnictví u Juliuse',
      description:
        'Consectetur quos incidunt quidem fugiat cumque dignissimos perferendis mollitia repellat.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Cotton Soap',
    slug: 'Sleek-Cotton-Soap',
    shortDesc: 'Aut ut voluptatem facere assumenda placeat enim.',
    description:
      'Eum eum aspernatur animi accusantium aliquid ratione. Odit eum autem harum eveniet. Necessitatibus ratione iusto expedita quia minima et omnis dolorem.\n \rQui ea praesentium porro consequatur facere qui aut praesentium qui. Perferendis dolorem facere fugit molestiae incidunt. Voluptatem repellat distinctio reiciendis iure omnis omnis ut et sint. Qui non quis odit cupiditate quas ipsa fugit nulla. Placeat perspiciatis et. Aut sed libero.\n \rVoluptas minus qui porro autem. Sunt soluta necessitatibus alias omnis laudantium quo. Quam quia inventore est nihil molestiae vitae.\n \rQuas sed est. Aperiam aspernatur ut voluptas qui corrupti sint distinctio ut laborum. Illum et saepe. Excepturi magnam ea sed.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 25 },
    seo: {
      title: 'Sleek Cotton Soap | Zahradnictví u Juliuse',
      description: 'Aut ut voluptatem facere assumenda placeat enim.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Refined Granite Car',
    slug: 'Refined-Granite-Car',
    shortDesc: 'Deserunt unde ducimus.',
    description:
      'Et deserunt quia. Quia debitis deserunt. Voluptate voluptatibus fugiat laboriosam. Vel excepturi cum animi et nisi. Unde et aut aut. Maxime quidem velit quisquam.\n \rExpedita itaque nam quaerat nihil repellat. Quisquam repellat ut cumque soluta voluptatem. Temporibus nihil cumque culpa et veritatis exercitationem iusto est blanditiis. Dolores vitae est. Harum est necessitatibus. Recusandae est doloribus ea quas similique nemo repellendus quia culpa.\n \rRepudiandae ut repudiandae. Temporibus corrupti non non et veniam optio quia. Facilis minima vel suscipit nulla animi molestiae suscipit quaerat. Voluptatem possimus fugiat error voluptatem. Id eum quo nobis. Libero perferendis recusandae assumenda.\n \rIn perferendis eos voluptatem quam minima. Hic voluptatem libero est quam voluptatibus unde dolorem. Ipsa totam laudantium nesciunt ut numquam. Ipsa libero dolore rem itaque pariatur ipsam quidem. Error et adipisci voluptates sint.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 439,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 42 },
    seo: {
      title: 'Refined Granite Car | Zahradnictví u Juliuse',
      description: 'Deserunt unde ducimus.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Awesome Plastic Shirt',
    slug: 'Awesome-Plastic-Shirt',
    shortDesc:
      'Deleniti eligendi qui omnis facilis fugit sed quis repudiandae.',
    description:
      'Non facere cumque. Architecto commodi ut sapiente quidem quia quas a esse ut. Vel minima consequuntur ut ea. Ad porro nihil fugiat maxime earum modi. Omnis laborum omnis. Et ratione qui pariatur.\n \rVoluptatem numquam explicabo accusantium ut ut optio nulla corporis. Modi excepturi sit fugit accusantium. Qui labore culpa adipisci. Accusantium tempora nisi earum molestiae non autem. Aut voluptas ex nihil ut nihil ullam reiciendis. Doloribus nihil qui molestias.\n \rQuam corporis doloremque porro non. Laborum beatae asperiores ut. Nisi eaque perspiciatis. Non pariatur voluptate aut assumenda repellat iusto qui dolores.\n \rPossimus perferendis fugiat sunt. Qui quia voluptatem asperiores veniam a eum excepturi a quis. Non neque natus deserunt qui nobis dignissimos. Modi autem nulla adipisci quidem blanditiis consectetur. Aperiam quasi cupiditate nihil corporis ipsa ut occaecati labore nulla. Dolorem voluptatem at et quidem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 21 },
    seo: {
      title: 'Awesome Plastic Shirt | Zahradnictví u Juliuse',
      description:
        'Deleniti eligendi qui omnis facilis fugit sed quis repudiandae.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Generic Wooden Car',
    slug: 'Generic-Wooden-Car',
    shortDesc:
      'Assumenda libero quia vitae exercitationem tenetur delectus et amet.',
    description:
      'Doloribus alias veritatis molestiae ea. Aut sapiente error sit. Delectus quis id ducimus ratione est quisquam nostrum. A nihil consequuntur. Nulla illo sunt illo.\n \rEt ut totam quisquam explicabo. Quod rem consequuntur ut repellendus voluptatum iure. Qui earum officia culpa quod. Consequatur incidunt quasi a cum et velit dolorum quisquam iste. Consequatur ab modi velit dolores culpa quos beatae ut ut.\n \rVel enim vero. Aut sequi ut harum sapiente temporibus ducimus et eos. Cupiditate dolorem est non. Possimus ducimus quia est sequi et eaque saepe ut quibusdam. Molestias qui consectetur sit fuga. Labore perferendis quo cumque repellat ipsum minima.\n \rDolor in quo quasi aliquid et. Ratione qui consectetur rerum ut nam est id possimus enim. Magni labore eaque optio quos. Rerum qui ut repudiandae nostrum autem nesciunt quia. Repellat harum quidem aut excepturi molestias sunt nostrum. Sit placeat minus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 429,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 9 },
    seo: {
      title: 'Generic Wooden Car | Zahradnictví u Juliuse',
      description:
        'Assumenda libero quia vitae exercitationem tenetur delectus et amet.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Concrete Bacon',
    slug: 'Tasty-Concrete-Bacon',
    shortDesc: 'Voluptatem qui nemo sit repellat temporibus et et dolore nam.',
    description:
      'Cumque dolore maiores et dolores nisi voluptates. Laudantium quia qui laboriosam porro et et tempora. Architecto culpa et reiciendis velit quis. Commodi voluptatibus asperiores incidunt et saepe animi assumenda ea et. Unde ut officia eveniet.\n \rNon nihil possimus ad quae. Et rerum et. Omnis illo dolores magnam voluptas rerum rerum minus ut et. Eos quibusdam vero enim pariatur. Non est aperiam voluptatum ducimus aliquid. Ut ut et aspernatur.\n \rVoluptatum quia ullam in odio numquam perspiciatis accusamus et dolore. Commodi ratione quia veritatis assumenda adipisci vel quia. Ea et eligendi magni quas dolorem nam occaecati alias. Ad modi ipsam cum est velit accusamus.\n \rTenetur quia in quia eum. Excepturi aliquam rerum optio et animi et. Quo debitis corporis sint culpa voluptatum odit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 87 },
    seo: {
      title: 'Tasty Concrete Bacon | Zahradnictví u Juliuse',
      description:
        'Voluptatem qui nemo sit repellat temporibus et et dolore nam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Sleek Cotton Soap',
    slug: 'Sleek-Cotton-Soap',
    shortDesc: 'Quibusdam odio earum.',
    description:
      'Commodi nihil molestiae tenetur. Esse quod placeat et sed distinctio ut. Odit consectetur et. Possimus ullam voluptatem sint similique eos quia debitis officiis.\n \rNon veniam ipsam est. Dicta voluptas qui et nesciunt. Odit ex ea deserunt at. Voluptatem dolor blanditiis ab id dignissimos consequatur. Cumque suscipit et.\n \rNihil et aut architecto odit voluptatem neque odit omnis rerum. Natus excepturi velit. A itaque est aliquam aut maxime enim et dolorum.\n \rSed consequatur amet quia. Rem animi et ullam veniam accusantium voluptas vitae est amet. Sequi sit iusto laudantium minus ab. Fuga rem temporibus labore id. Aperiam quia vel ut aperiam. Quia ad dicta necessitatibus inventore.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 37 },
    seo: {
      title: 'Sleek Cotton Soap | Zahradnictví u Juliuse',
      description: 'Quibusdam odio earum.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Incredible Concrete Car',
    slug: 'Incredible-Concrete-Car',
    shortDesc: 'Maiores et id explicabo fugit sint odio occaecati.',
    description:
      'Et quidem repellat assumenda dolores est perferendis blanditiis. Animi non quia omnis est. Delectus iure sed temporibus reiciendis. Aliquam corrupti est.\n \rRem eum soluta numquam quas culpa eius eaque. Expedita ipsum quia qui est et perferendis. Quia rerum voluptatum est omnis quia dolor a dolor. Ipsa totam corporis voluptatum cum quia. Occaecati dolorum amet molestias reprehenderit omnis rerum reprehenderit magnam.\n \rDolor corrupti error. Ratione eos ut eligendi a. Fugiat aut eius ut corrupti eaque amet eum minima et. Veniam quae voluptatem rerum adipisci reprehenderit ipsa laboriosam. Quia qui vel. Totam enim libero quas nulla neque molestias.\n \rDolorem sed voluptas. Qui eos molestias qui. Fugiat doloremque eos aut molestiae sit impedit praesentium. Id voluptas omnis et qui accusantium vel. Quae corrupti animi voluptatem commodi saepe. Excepturi rerum dolor consectetur eum aut dolore.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 22 },
    seo: {
      title: 'Incredible Concrete Car | Zahradnictví u Juliuse',
      description: 'Maiores et id explicabo fugit sint odio occaecati.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Fantastic Rubber Keyboard',
    slug: 'Fantastic-Rubber-Keyboard',
    shortDesc: 'Voluptates odit commodi et dolorem neque ducimus.',
    description:
      'Quos et necessitatibus qui quia animi vitae aut. Et praesentium assumenda atque facilis. Quia eum sapiente et sit aut similique consequatur.\n \rExpedita veniam autem et aspernatur quaerat exercitationem animi. Dignissimos animi architecto. Doloribus magnam distinctio maiores.\n \rSint iure dicta itaque dolor repellendus voluptatem dolore ullam est. Commodi vel animi aut in doloremque inventore nam. Neque deserunt aut hic. Harum maiores nihil cupiditate quisquam voluptas autem accusamus consequatur placeat. Eligendi blanditiis ipsa occaecati ut occaecati totam nemo error. Quaerat et et est perferendis ab rerum sapiente et cupiditate.\n \rDicta perferendis et. Ea expedita sit illum ipsam qui. Expedita enim consequatur debitis eveniet eos rerum eum animi qui. Repellendus cupiditate odit quod reprehenderit eaque quo maxime accusantium quae. Labore quae eos amet laborum ullam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 19 },
    seo: {
      title: 'Fantastic Rubber Keyboard | Zahradnictví u Juliuse',
      description: 'Voluptates odit commodi et dolorem neque ducimus.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Sleek Plastic Tuna',
    slug: 'Sleek-Plastic-Tuna',
    shortDesc: 'Repellendus sit veritatis quae reiciendis minima.',
    description:
      'Delectus molestiae sed modi sequi in. Et ut dolorem voluptate exercitationem nemo esse sint. Deleniti ut consequatur aut labore ab rerum nobis et.\n \rNobis blanditiis consequatur. Et doloribus sint ut nihil et eos distinctio quo quia. Tempora modi aut maiores. Quae hic quam facilis earum voluptatem aliquam numquam pariatur molestiae. Amet necessitatibus eos non. Rerum eos expedita voluptatem perferendis nam et ullam mollitia et.\n \rId at consectetur quam totam itaque eligendi est et ipsum. Quam rem rerum perferendis perferendis non dolores est perferendis. Officia hic inventore. Ea ut occaecati molestias id est rem et incidunt est. Eaque sed natus qui deserunt maxime.\n \rHarum odio vel. Quo ducimus ut molestiae rem. Quae repellendus facilis ducimus repudiandae quaerat facilis fugit omnis quia. Repellendus voluptates eum.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 42 },
    seo: {
      title: 'Sleek Plastic Tuna | Zahradnictví u Juliuse',
      description: 'Repellendus sit veritatis quae reiciendis minima.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Intelligent Rubber Shirt',
    slug: 'Intelligent-Rubber-Shirt',
    shortDesc:
      'Et voluptas vel voluptatem fuga qui dolores aspernatur voluptates.',
    description:
      'Eos eius fugit dolorum. Velit cum non facilis quam corporis et quidem aliquam. Dolor occaecati quo voluptatem. Sint unde aut iste itaque. Et velit laudantium.\n \rRerum ut optio consequatur nostrum ipsum. Itaque enim consequatur magnam unde amet dicta error. Iste fuga dignissimos. Autem et non minima aut.\n \rTotam molestias rerum et voluptas ipsum. Aut voluptatem omnis sint et dolores unde aliquam alias eaque. Consequuntur exercitationem omnis ea molestiae suscipit corporis.\n \rUt assumenda dolores nihil. Aut quibusdam quasi. Occaecati in est ut quia. Aut sapiente deleniti corrupti praesentium est ipsa.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 409,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 47 },
    seo: {
      title: 'Intelligent Rubber Shirt | Zahradnictví u Juliuse',
      description:
        'Et voluptas vel voluptatem fuga qui dolores aspernatur voluptates.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Steel Cheese',
    slug: 'Sleek-Steel-Cheese',
    shortDesc: 'Enim inventore autem illum delectus laudantium.',
    description:
      'Voluptatem et aut consequatur illum maiores aliquam laboriosam. Ullam et magni tempore qui aspernatur iure possimus ut. Et qui eius maxime ad est consequatur. Aliquid ipsa ullam et dolore officiis velit et. Incidunt velit quod sit perferendis vitae.\n \rDicta voluptate ipsum omnis ad nisi architecto ducimus. Porro quia animi voluptatem sapiente quidem. Eum molestias perferendis sed quas et culpa et. Quaerat iure aut.\n \rEarum dicta magni sapiente dolor tempora culpa velit necessitatibus quaerat. Eum dolores incidunt soluta asperiores at rem ut. Veritatis placeat sequi.\n \rPerspiciatis reiciendis non quis animi asperiores reprehenderit eaque consequatur reprehenderit. Illo architecto numquam. Reprehenderit non et consectetur debitis. Est fugit iste mollitia id eius deleniti corporis et sunt.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 26 },
    seo: {
      title: 'Sleek Steel Cheese | Zahradnictví u Juliuse',
      description: 'Enim inventore autem illum delectus laudantium.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Licensed Concrete Bike',
    slug: 'Licensed-Concrete-Bike',
    shortDesc: 'Temporibus iste sequi consequatur rerum sit.',
    description:
      'Modi quod neque deleniti beatae placeat consectetur ut mollitia qui. Veniam ducimus et. Est eum quo occaecati quasi rerum quos aut officiis. Et quas saepe adipisci voluptate assumenda qui et eum. Voluptates voluptatibus quas cumque aperiam facilis iure est libero aut.\n \rIpsa quae totam quis cum pariatur voluptate quam. Expedita provident mollitia. Eos explicabo ullam dolorum veniam quo. Suscipit omnis tenetur voluptas et eaque at enim.\n \rAnimi voluptatem nemo et inventore quibusdam. Praesentium libero sint dolorem amet. Pariatur in nam. Occaecati eius quos.\n \rNostrum vel nesciunt pariatur dolor cupiditate ipsam. Vitae rerum nostrum eveniet aut ea. Maxime aut perferendis. Excepturi reiciendis sapiente cum eum maxime quibusdam est maxime voluptas. Nostrum nesciunt libero expedita eveniet nam aut nulla tenetur aspernatur. Laboriosam maiores exercitationem quos.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 209,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 20 },
    seo: {
      title: 'Licensed Concrete Bike | Zahradnictví u Juliuse',
      description: 'Temporibus iste sequi consequatur rerum sit.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handmade Soft Fish',
    slug: 'Handmade-Soft-Fish',
    shortDesc: 'Consequatur eaque et ea distinctio tenetur temporibus.',
    description:
      'Expedita at fugit quisquam officia ad ipsum officia culpa consequuntur. Ex ad optio alias saepe facilis officia enim libero et. Quia reprehenderit illum vel cupiditate voluptatem accusamus distinctio. Optio velit eos sapiente doloremque esse deleniti officia. Et ipsum quis.\n \rVoluptatibus exercitationem nemo nesciunt omnis. Voluptatem architecto iusto molestiae eos aut. Provident cumque corporis. Aspernatur ea nihil libero corrupti illum neque natus. Facilis quis occaecati. Inventore similique consequatur dolorem et quae.\n \rExcepturi aut omnis omnis. Ut adipisci non voluptatibus id facilis. Vero culpa quas fugiat dolor.\n \rAssumenda doloremque dolores. Magni perferendis omnis quos esse. Praesentium rerum numquam a. Porro asperiores minima vel et sit qui ullam quisquam veritatis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 169,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 80 },
    seo: {
      title: 'Handmade Soft Fish | Zahradnictví u Juliuse',
      description: 'Consequatur eaque et ea distinctio tenetur temporibus.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Practical Soft Cheese',
    slug: 'Practical-Soft-Cheese',
    shortDesc: 'Ratione et fugit reprehenderit et error.',
    description:
      'Alias illo harum nihil eos sit dolorum. Qui ipsam quibusdam dolor voluptatum animi maxime. Quibusdam illum voluptatem magni consectetur officia labore sed.\n \rRatione et nesciunt fugit maxime magnam non ipsa. Minus sunt voluptas dolorum aliquid hic. In beatae facilis mollitia nihil veritatis fugit nulla. Quis suscipit aut. Mollitia maiores explicabo voluptate ut.\n \rQuam quam voluptates asperiores vitae incidunt accusantium cum enim. Voluptatibus dolores maiores nemo impedit laboriosam autem aliquam sequi. Alias quis qui modi.\n \rEt eaque ea aut quisquam ut animi. Reiciendis deleniti fugit saepe quia veritatis omnis. Omnis aut et rem. Sit ex omnis magnam et soluta. Ea velit eius sed.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 409,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 99 },
    seo: {
      title: 'Practical Soft Cheese | Zahradnictví u Juliuse',
      description: 'Ratione et fugit reprehenderit et error.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Rubber Tuna',
    slug: 'Incredible-Rubber-Tuna',
    shortDesc: 'Aut delectus incidunt deleniti modi quia hic non nisi.',
    description:
      'Voluptatem voluptatibus libero qui excepturi. Est voluptas voluptas fugit consequuntur omnis nobis distinctio esse et. At odit excepturi aut sit nihil. Quia tenetur sed reiciendis corporis. Est odio ut dolores magnam consequatur eos saepe quo.\n \rConsectetur quisquam laudantium. Eius et quia provident eos aliquid vero. Itaque et sunt temporibus et odio aut non. Eum sit accusamus minus occaecati rerum iure in. Consequatur ut illum vero vel natus.\n \rSed nihil quia modi illum maiores blanditiis. Cum repellendus harum atque facilis voluptates ut nemo placeat ad. Quia nemo voluptatem. Itaque nihil quis distinctio sed sit asperiores eos quae. Recusandae explicabo velit.\n \rQuis voluptatem ratione dolores sunt corporis adipisci quo. Nesciunt sapiente sed sint quo. Reiciendis sunt omnis accusamus accusamus facilis tenetur.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 19,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 60 },
    seo: {
      title: 'Incredible Rubber Tuna | Zahradnictví u Juliuse',
      description: 'Aut delectus incidunt deleniti modi quia hic non nisi.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Intelligent Concrete Chair',
    slug: 'Intelligent-Concrete-Chair',
    shortDesc: 'Perferendis nesciunt dolorem ut.',
    description:
      'Rem nesciunt est expedita quas in ad nihil et in. Vero corporis maxime consequatur atque in nam aut debitis. Tempora earum magnam maiores ea facere nemo aut voluptatem et. Id tenetur quibusdam qui unde. Facilis ducimus possimus asperiores et. Quos est et vitae.\n \rFacere quisquam nesciunt repellat illo amet qui quasi maxime. Ea natus excepturi. Veniam aut ducimus dolorem aspernatur. Harum quia quidem alias vitae.\n \rQuae dolores optio ut temporibus aut ut et aut. Voluptas ratione aspernatur nulla iusto vel. Id est est dolor. Placeat facere sequi repellendus minus modi deleniti ad et debitis.\n \rAccusantium aliquid reprehenderit porro dolorem commodi praesentium molestiae explicabo. Voluptatem molestiae sunt. Excepturi doloremque nihil fugiat qui culpa.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 78 },
    seo: {
      title: 'Intelligent Concrete Chair | Zahradnictví u Juliuse',
      description: 'Perferendis nesciunt dolorem ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Ergonomic Metal Hat',
    slug: 'Ergonomic-Metal-Hat',
    shortDesc: 'Fugit doloremque quod ad sit corrupti ut quisquam.',
    description:
      'Eos sapiente minus nemo atque totam accusantium in non vitae. Facere quasi alias aut. Quo et ducimus nostrum rem soluta. Totam accusantium commodi eveniet. Ea blanditiis quos ut quo rerum rerum. Repellendus voluptas eius cum ducimus nesciunt.\n \rQuia cumque quia iusto voluptatem et. Sapiente error ab cumque ad perspiciatis. Ipsum ex temporibus ratione eius est ea eos et. Rerum modi voluptas.\n \rEt commodi sint non. Sapiente non doloremque et. Reprehenderit sint itaque omnis molestias.\n \rProvident quae sed. Necessitatibus sed sit magni. Eius optio voluptatem nesciunt laboriosam. Voluptate fugit voluptatem maiores amet nobis ratione nihil est quia. Ut magni aut asperiores velit suscipit voluptatem maxime.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 359,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 11 },
    seo: {
      title: 'Ergonomic Metal Hat | Zahradnictví u Juliuse',
      description: 'Fugit doloremque quod ad sit corrupti ut quisquam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Fresh Ball',
    slug: 'Practical-Fresh-Ball',
    shortDesc: 'Reiciendis illo eius debitis.',
    description:
      'Quas eos unde et natus est et rerum earum. Sequi neque facere corporis perspiciatis ea incidunt eum est repudiandae. Velit pariatur id inventore et mollitia. Impedit illum et magnam dicta. Ducimus placeat beatae doloribus et totam corporis. Aut nesciunt accusantium.\n \rFuga quod et impedit et sequi beatae occaecati voluptate. Rem earum fugit in necessitatibus fuga ut quasi vel. Deserunt sapiente placeat reprehenderit dolore distinctio quia. Impedit sunt quia officia hic. Vel consequatur ex suscipit provident. Unde non eveniet exercitationem nostrum aut dolores quos.\n \rFuga assumenda rerum sit eius repudiandae sint et et. Veritatis ut velit sit voluptatem perferendis cumque. Quo nam autem. Sed non dolore dolores itaque. Sit est nesciunt accusamus. Ullam eos voluptatum nesciunt dolorem nam.\n \rModi fugiat nesciunt ipsam nihil qui dolor eum quis laboriosam. Atque ut aperiam corrupti ipsa et consequuntur nihil at. Suscipit quia reprehenderit est cupiditate. Cum ab facilis ex aspernatur. Harum ea earum consectetur. Ratione tenetur eos occaecati reiciendis aut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 95 },
    seo: {
      title: 'Practical Fresh Ball | Zahradnictví u Juliuse',
      description: 'Reiciendis illo eius debitis.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Practical Soft Computer',
    slug: 'Practical-Soft-Computer',
    shortDesc:
      'Architecto consequatur quidem dolores quis possimus eveniet consequatur adipisci.',
    description:
      'Ipsum et debitis sit animi voluptatem. Est voluptate nesciunt et beatae repudiandae. Ipsum vel repudiandae quidem. Ad magni nobis esse voluptas ducimus facere. Sed esse voluptatem ipsa sequi rerum voluptates.\n \rOmnis pariatur laboriosam iste. Vero et esse perspiciatis. Nihil earum tenetur optio nostrum et est omnis illum. Esse recusandae excepturi praesentium ullam unde. Autem quia rerum beatae dolorem quae saepe omnis.\n \rDolore aut iste. Asperiores ut reprehenderit quia non neque aliquid assumenda. Et placeat voluptatem praesentium consequuntur.\n \rIn tempora error excepturi. Unde reiciendis nemo rerum ipsa eveniet. Ut corrupti omnis unde praesentium consequatur ut et maiores. Consequatur at officiis ut saepe rerum unde voluptatem quo vel.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 23 },
    seo: {
      title: 'Practical Soft Computer | Zahradnictví u Juliuse',
      description:
        'Architecto consequatur quidem dolores quis possimus eveniet consequatur adipisci.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Rustic Rubber Pants',
    slug: 'Rustic-Rubber-Pants',
    shortDesc: 'Nemo molestiae voluptatem iste laboriosam.',
    description:
      'Impedit itaque quam quis quia expedita. Sit saepe qui. Autem nemo consequatur qui perspiciatis nihil. Iste dolores quidem sit assumenda quas qui asperiores. Est tempore possimus impedit at dolor ab eveniet fugiat saepe.\n \rQuia voluptatem labore consequatur. Voluptatem qui tempore tempora similique. Ut et doloribus soluta eveniet. Quia sit mollitia ipsam at officia id voluptatem. Facilis qui est quod quia.\n \rFacilis commodi eius exercitationem deleniti id est. Est in pariatur accusantium nulla provident reiciendis. Facilis maiores recusandae earum sapiente laboriosam placeat porro omnis. Et sint sequi expedita dolore quibusdam voluptates. Corporis deserunt dolores et id quae nisi quia. Molestiae nulla exercitationem atque est neque.\n \rOmnis eum qui eos debitis est et consequatur sint nesciunt. Esse sit molestiae veniam dolorem rem quaerat doloribus. Totam quod at.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 539,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 7 },
    seo: {
      title: 'Rustic Rubber Pants | Zahradnictví u Juliuse',
      description: 'Nemo molestiae voluptatem iste laboriosam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Generic Plastic Salad',
    slug: 'Generic-Plastic-Salad',
    shortDesc:
      'Sint explicabo commodi est voluptatem perspiciatis sed dolores quam veritatis.',
    description:
      'Voluptates delectus et ut. Aut fuga esse ipsa sit saepe rerum quis eveniet. Numquam sunt totam voluptatem et qui rerum quis natus.\n \rEst magni quibusdam quia fuga consequatur similique quo. Dolor debitis doloremque dolores quis libero. Dignissimos sequi omnis totam est animi praesentium tempora. Et labore corporis repellat commodi odio.\n \rAut rem porro similique quia. Velit ut vitae iusto exercitationem rem vel expedita. Atque repellat voluptas aliquam cum voluptas ut et. Id id architecto. Consectetur in qui. Exercitationem praesentium enim similique itaque aut enim rerum.\n \rNatus sed dolorem nulla molestiae. Ullam nobis sequi ab enim in. Et ipsum id est neque ad vitae ut. Atque optio consequuntur ullam beatae. Repudiandae voluptatibus rerum architecto possimus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 49,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 29 },
    seo: {
      title: 'Generic Plastic Salad | Zahradnictví u Juliuse',
      description:
        'Sint explicabo commodi est voluptatem perspiciatis sed dolores quam veritatis.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Awesome Granite Mouse',
    slug: 'Awesome-Granite-Mouse',
    shortDesc:
      'Maiores maiores libero itaque officia atque aperiam animi minus sint.',
    description:
      'Officiis in impedit soluta vitae occaecati reiciendis et. Repellat sapiente id accusantium itaque quae. At et quisquam accusantium excepturi quidem quod. Consequatur ut neque minus rerum aliquam omnis quasi qui. Dolorum ut unde velit eligendi et tempora.\n \rEos ut itaque voluptatem et. Laborum et quibusdam sapiente doloremque in quo ducimus temporibus. Illum blanditiis qui dolores consequatur officia fugit. Sed delectus quos esse. Qui nihil dolores.\n \rIn est soluta ducimus et et esse. Eveniet quibusdam quia enim ut. Beatae pariatur dolores delectus. Aspernatur ut molestiae voluptas. Iusto sit quo quia ab iste suscipit nobis. Sint rerum officiis nostrum esse labore.\n \rDoloribus sunt quasi. Deserunt non magni iusto quisquam dicta iste minima et eos. Animi officia qui eaque occaecati nesciunt. Et voluptas consequatur neque neque. Qui esse voluptatem. Iusto laborum ab voluptas aut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 329,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 34 },
    seo: {
      title: 'Awesome Granite Mouse | Zahradnictví u Juliuse',
      description:
        'Maiores maiores libero itaque officia atque aperiam animi minus sint.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fantastic Steel Fish',
    slug: 'Fantastic-Steel-Fish',
    shortDesc:
      'Nulla optio possimus earum aperiam libero assumenda aut tempora omnis.',
    description:
      'Quaerat maxime autem. Rerum alias id magnam dolores et harum dolores aliquid. Ipsum eveniet sit voluptates ut qui. Iste voluptatem debitis aut ut minima recusandae. Fuga qui cum. Eum est animi minus est.\n \rInventore quod consequuntur. Aliquid illum debitis perspiciatis in ipsa debitis similique autem. Assumenda rerum voluptatem nemo nobis pariatur odit officiis. In vel ex animi.\n \rAutem consectetur et sint. Ipsa doloribus voluptas fugiat eum est incidunt. Quod ea quam accusamus vitae sunt sunt. Omnis soluta nulla nesciunt aut sequi. Eos perspiciatis quia maxime cum amet molestias quia. Illum commodi minima ut omnis rem nihil.\n \rVoluptatem recusandae aperiam deleniti alias ipsa facere accusamus vel. Odio nihil officiis. Et dolorem occaecati aut fugit nemo aliquam a sed quia. Architecto fugit eos voluptas rerum. Ut praesentium omnis nam iusto eum dolorem. Pariatur ipsam exercitationem accusamus.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 519,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 18 },
    seo: {
      title: 'Fantastic Steel Fish | Zahradnictví u Juliuse',
      description:
        'Nulla optio possimus earum aperiam libero assumenda aut tempora omnis.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Tasty Granite Salad',
    slug: 'Tasty-Granite-Salad',
    shortDesc: 'Voluptatem ipsa ipsam.',
    description:
      'Et sit sit dolorem. Amet ipsam inventore quisquam. Velit sed dolor vero perferendis pariatur tempora dolores ut.\n \rSaepe molestiae porro veniam in ut recusandae aliquam commodi. Molestiae quisquam ad est labore neque amet tempora dignissimos. Consectetur dicta facere provident et ut. Omnis suscipit saepe ut accusamus aut voluptatem omnis sit.\n \rReiciendis eveniet amet voluptas labore labore quia omnis. Suscipit sunt dolorem eligendi voluptatem consequatur nesciunt perferendis quam. Ut et ad. Facilis autem est natus aut. Eos in minima ullam quam vel quas illum qui. Sit quia perspiciatis culpa dicta.\n \rFacilis in aut ut in corporis ut quo. Sunt aut occaecati tempore ab. Aut aut consectetur quis a suscipit eius.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 82 },
    seo: {
      title: 'Tasty Granite Salad | Zahradnictví u Juliuse',
      description: 'Voluptatem ipsa ipsam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Handcrafted Plastic Ball',
    slug: 'Handcrafted-Plastic-Ball',
    shortDesc:
      'Ipsam pariatur laborum sint impedit ut quia eius fugiat deserunt.',
    description:
      'Magnam ea soluta eius dolore. Velit cupiditate eaque temporibus illo dolor qui in corrupti repellat. Soluta dignissimos sed voluptatum dolore explicabo tenetur ut aperiam. Doloremque occaecati qui. Et nam eaque sunt ut perferendis recusandae ipsum.\n \rAliquid vitae provident. Dicta similique quia earum expedita cupiditate. Accusamus facilis est aut repellat fugiat adipisci.\n \rVoluptatem laboriosam architecto. Voluptatem velit voluptatem. Voluptas voluptatem mollitia. Ad nostrum in sapiente rerum ad.\n \rSed dolore et magni repellendus occaecati labore modi ut et. Omnis quos repellat dolores. Pariatur ducimus aut sed alias consectetur iusto. Saepe nisi libero facilis sed blanditiis. Iste eos rerum omnis quas dolorem enim est. Autem natus omnis adipisci praesentium quas est.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 409,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Handcrafted Plastic Ball | Zahradnictví u Juliuse',
      description:
        'Ipsam pariatur laborum sint impedit ut quia eius fugiat deserunt.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Refined Frozen Soap',
    slug: 'Refined-Frozen-Soap',
    shortDesc: 'Qui velit minima.',
    description:
      'Architecto voluptas magnam culpa eius. Dolor et consequuntur consequatur cum. Molestias eaque quibusdam quo rerum unde perferendis sed et in. Iusto magni non omnis porro animi earum ipsum.\n \rPariatur omnis alias. Perspiciatis aut delectus. Voluptas aliquam iusto occaecati ut est saepe eaque occaecati. Et cumque eum assumenda ut mollitia explicabo alias nostrum. Velit eligendi autem sint at qui. Beatae necessitatibus quas excepturi et.\n \rVitae sunt velit. Voluptatem rerum sed. Dolorem reiciendis saepe commodi ea aut pariatur tempore accusantium. Est facilis quo. Optio pariatur non aspernatur praesentium natus laboriosam ducimus veniam.\n \rQuod veritatis ut ut. Consectetur nisi voluptatem quae ratione. Eum fuga est amet a vel odit. Aliquam similique dolores nobis iure.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 539,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 3 },
    seo: {
      title: 'Refined Frozen Soap | Zahradnictví u Juliuse',
      description: 'Qui velit minima.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Sleek Cotton Car',
    slug: 'Sleek-Cotton-Car',
    shortDesc:
      'Porro ut ut est necessitatibus magni repellendus corrupti nisi.',
    description:
      'Et accusantium deserunt tempora eos nihil fugiat sequi non tempore. Tempora officiis ea. Ex nostrum aliquid aut voluptates rerum placeat aut rem sapiente.\n \rFuga doloribus ea molestiae perspiciatis non. Et sunt consequatur. Earum quia id aperiam veniam neque ut. Et optio quidem dignissimos omnis ipsam. Minima quas vel at est sed accusantium aliquid sapiente sit. Error delectus vel deleniti.\n \rQui quis velit eos sapiente aut. Et veniam excepturi ipsa eum adipisci. In dolores veniam.\n \rSunt explicabo eos at non. Debitis non itaque architecto soluta et laborum pariatur. Consequatur ipsum ut aut tempora reiciendis fugit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 429,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 17 },
    seo: {
      title: 'Sleek Cotton Car | Zahradnictví u Juliuse',
      description:
        'Porro ut ut est necessitatibus magni repellendus corrupti nisi.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Generic Cotton Pizza',
    slug: 'Generic-Cotton-Pizza',
    shortDesc: 'Totam ea minus.',
    description:
      'Pariatur cum laboriosam ut nihil sint magni. Voluptas rerum eveniet distinctio eveniet harum. A aut earum ut.\n \rAlias ipsam est pariatur non mollitia dolorum eos perferendis. Vitae maxime et dolores. Iusto pariatur vero et nemo quia magnam illum. Dolore molestiae unde minus consequuntur aut recusandae.\n \rNam quia numquam nisi. Optio est suscipit officiis sint. Ut aut hic optio officia assumenda et.\n \rUt quia iste adipisci in deserunt. Esse corporis ut quae beatae quis. Commodi ad vitae quaerat. Consequatur aliquid quos dolorem voluptatem sapiente voluptates.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 369,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 85 },
    seo: {
      title: 'Generic Cotton Pizza | Zahradnictví u Juliuse',
      description: 'Totam ea minus.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Unbranded Rubber Chair',
    slug: 'Unbranded-Rubber-Chair',
    shortDesc: 'Rerum est voluptatibus facilis aut error non.',
    description:
      'Consectetur deserunt doloremque commodi atque est doloremque harum aperiam hic. Fugit occaecati nihil id aperiam qui fugit ipsa. Delectus ullam dolorem maxime cumque eveniet. Possimus maiores doloremque nostrum quis.\n \rAut dolores ea deleniti ea. Illum rerum similique aperiam saepe fuga nihil quis impedit et. Maxime est non cum. Et aut voluptas doloremque. Et non quis deleniti ut nihil tempora quia occaecati inventore.\n \rQuam architecto laboriosam sapiente qui omnis non sit at. Repellendus beatae natus dolor velit animi sed. Repudiandae in rerum magni quos consequatur sint incidunt illum cupiditate. Nesciunt perspiciatis quod dicta.\n \rRepellat cupiditate quos unde. Ad porro laudantium ea. Consequuntur aut autem harum ea incidunt qui totam quam. Nihil temporibus ipsam voluptas sunt enim nihil. Ut ducimus provident velit accusamus similique. Est dolorem sapiente laboriosam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 359,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 9 },
    seo: {
      title: 'Unbranded Rubber Chair | Zahradnictví u Juliuse',
      description: 'Rerum est voluptatibus facilis aut error non.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Handmade Steel Keyboard',
    slug: 'Handmade-Steel-Keyboard',
    shortDesc: 'Minima doloremque qui libero praesentium enim soluta.',
    description:
      'Sit repellendus assumenda ut dolores repudiandae. Fugit rem accusantium cupiditate beatae aut. Sed laudantium voluptatem sed. Fuga molestias minima voluptas porro. Vel et magni autem qui numquam molestiae aliquid aut similique.\n \rQuia quae omnis ut sit fugiat officiis ut amet. At vitae possimus quam et eius similique pariatur incidunt. Culpa delectus a occaecati sed recusandae dolorum sint aliquam minus. Quae sit et quod nemo deleniti officia.\n \rDelectus placeat modi quibusdam dolore ab accusantium. Eum animi sed aut. Itaque ea recusandae. Eveniet sequi doloribus doloribus ad aut ratione. Non voluptatem eos in ratione et repellat ipsa.\n \rQuos sed aut quam. Molestias quia commodi in adipisci commodi laudantium. Ut maxime possimus voluptate incidunt. Rerum repudiandae harum voluptas minus velit magni odit. Soluta iure enim id.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 169,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 49 },
    seo: {
      title: 'Handmade Steel Keyboard | Zahradnictví u Juliuse',
      description: 'Minima doloremque qui libero praesentium enim soluta.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handcrafted Rubber Bike',
    slug: 'Handcrafted-Rubber-Bike',
    shortDesc: 'Sed perspiciatis et facere dolorem et perferendis ut autem.',
    description:
      'Accusantium reiciendis magnam perferendis sed nemo iusto atque omnis quia. Nam quos ea amet hic est quia veritatis. Non pariatur consequatur in consequatur consequatur molestiae eos dolores. At sunt repellat reprehenderit et ut totam.\n \rRerum similique officiis consequatur voluptatem. Velit ipsam ea. Facilis atque harum repellat corrupti qui. Reprehenderit sit enim qui non nam nostrum et. Ducimus ratione accusantium amet nihil nobis quis.\n \rConsequuntur aliquam soluta reprehenderit. Perferendis sit aperiam. Mollitia dignissimos dolores aspernatur excepturi laudantium tempore non voluptatem ea. Enim quo est cupiditate omnis et id error.\n \rUnde voluptatum eos vitae temporibus quaerat. Dolorum eum sequi exercitationem harum voluptas adipisci reprehenderit. Laboriosam vero eum sit sed aut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 69 },
    seo: {
      title: 'Handcrafted Rubber Bike | Zahradnictví u Juliuse',
      description:
        'Sed perspiciatis et facere dolorem et perferendis ut autem.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Ergonomic Rubber Shoes',
    slug: 'Ergonomic-Rubber-Shoes',
    shortDesc:
      'Aperiam quibusdam cumque dolores exercitationem id repellendus officiis.',
    description:
      'Vero quaerat numquam asperiores itaque quae. Voluptate delectus praesentium nemo fugit dolor aut dolores quae et. Vel quo in. Pariatur in nostrum similique quia soluta facilis ut laudantium occaecati. Nesciunt consequuntur ipsam atque impedit velit corporis ut praesentium. Ut amet doloremque dicta.\n \rQui excepturi nihil velit autem dolorem et molestias ut perferendis. Eaque enim dolor sapiente repellendus. Sunt totam quibusdam est consequatur. Sed natus fugiat tempore facilis beatae debitis aut et itaque.\n \rA qui sint quia dolore iste dolore aperiam minus unde. Excepturi sed aliquam nostrum minus eaque. Laborum iure laudantium. Occaecati dignissimos dolores qui eligendi. Consequatur labore aut distinctio voluptates autem molestias sint voluptatem optio.\n \rHarum in ducimus harum fugit culpa nemo. Non iste et et ab deserunt assumenda. Quae quod aut iusto neque quidem et nobis omnis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 539,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 9 },
    seo: {
      title: 'Ergonomic Rubber Shoes | Zahradnictví u Juliuse',
      description:
        'Aperiam quibusdam cumque dolores exercitationem id repellendus officiis.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handmade Soft Ball',
    slug: 'Handmade-Soft-Ball',
    shortDesc: 'Ipsam fugit perferendis odio sed aut deleniti sed.',
    description:
      'Esse voluptatum consectetur est id assumenda voluptatem voluptatem inventore dolor. Et voluptas commodi in sunt. Quia quidem reprehenderit dolore. Cupiditate voluptas et incidunt fugiat. Veniam enim est.\n \rSed temporibus nisi modi quis veniam aut ut. Rerum voluptas quia praesentium. Voluptas vero facilis qui sit sed error delectus enim.\n \rConsequatur quia aut dolor molestiae sunt nisi deleniti. Numquam nihil aut et quasi. Sit numquam quam velit id enim. Ipsum earum repellat molestias adipisci iusto dolor temporibus et quibusdam.\n \rQuam velit eos temporibus adipisci suscipit eligendi repudiandae quis odio. Ab ea at. Quae exercitationem asperiores quo.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 349,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Handmade Soft Ball | Zahradnictví u Juliuse',
      description: 'Ipsam fugit perferendis odio sed aut deleniti sed.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handcrafted Cotton Bike',
    slug: 'Handcrafted-Cotton-Bike',
    shortDesc: 'Est nostrum voluptas velit et repellat ducimus et.',
    description:
      'Atque debitis fugit. Quia aspernatur tempora molestias saepe unde ut est. Corporis porro enim voluptates quas. Aut quae voluptas. Mollitia recusandae alias ex. Consequatur non et vero iste omnis ut laborum sunt.\n \rNon perspiciatis quos ut. Animi incidunt ipsum maiores culpa sint quo animi. Repudiandae tenetur praesentium commodi neque. Qui cupiditate necessitatibus. Aliquam sunt voluptatem sed libero autem magnam at. Exercitationem asperiores accusantium.\n \rNobis consequatur omnis molestias laudantium officiis sit temporibus. Quis modi odio pariatur corporis placeat eos optio labore odio. Quis voluptatem et eligendi voluptates autem expedita nesciunt. Voluptatibus voluptatum optio.\n \rVoluptatem occaecati distinctio ullam maxime accusantium dolorem hic. Culpa quaerat cupiditate sit nihil facilis dolor esse. Occaecati velit ut sit earum et provident dignissimos dolorem libero. Perspiciatis dolores optio placeat accusamus odio sunt et. Temporibus quisquam et molestiae quis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 10 },
    seo: {
      title: 'Handcrafted Cotton Bike | Zahradnictví u Juliuse',
      description: 'Est nostrum voluptas velit et repellat ducimus et.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Rustic Fresh Pizza',
    slug: 'Rustic-Fresh-Pizza',
    shortDesc: 'Quia earum omnis magni et autem rerum fuga dolore.',
    description:
      'Culpa sit facilis molestiae vel qui inventore officiis. Deserunt debitis ullam. Similique maxime repellat ipsum qui impedit. Vel qui consequatur sint sint a et magnam. Molestiae in asperiores ut magni quisquam ut. Nobis blanditiis non voluptatem perspiciatis voluptas voluptas nostrum rerum.\n \rInventore assumenda nemo tempore aut rerum ut neque nam. Id nemo inventore consequatur quam adipisci et. In et adipisci veritatis placeat ex maxime dolore nesciunt. Voluptate qui sed nulla ut magni animi recusandae nihil. Aliquam possimus ipsa occaecati qui dolore accusantium fuga aliquid. Officiis sit aut non.\n \rUnde in sint ut perferendis quas dicta praesentium at. Quisquam in quo. Animi sit est excepturi. Quo dolorem quod sunt. Tempora enim quis commodi ut molestiae sint. Enim delectus amet officiis eaque molestias.\n \rQuo autem ipsum quasi vero ut dolorum consequatur qui. Quia id ea voluptate quo et veniam et suscipit. Rerum ratione molestiae quia qui et vitae voluptas commodi nisi. Sed aut qui explicabo et. Facilis voluptas sint eos est. Quas in dolorem at quidem quod aliquid.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 129,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 40 },
    seo: {
      title: 'Rustic Fresh Pizza | Zahradnictví u Juliuse',
      description: 'Quia earum omnis magni et autem rerum fuga dolore.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Intelligent Rubber Table',
    slug: 'Intelligent-Rubber-Table',
    shortDesc:
      'Et beatae voluptatibus repellendus eaque illo dolores consequatur labore id.',
    description:
      'Quis saepe aperiam temporibus et rerum veniam eum. Sit voluptate architecto ullam minima exercitationem quos aut adipisci. Rerum magnam quos et aliquid.\n \rEt ut eaque et laboriosam quo voluptatem dignissimos dolor. Facilis quidem qui odio ipsa. Animi deleniti tenetur autem.\n \rEius nostrum dolor. Voluptate maiores dignissimos eos occaecati id est ut non et. Voluptatem excepturi sunt omnis qui odio dolores in. Qui error quam esse reprehenderit ut ea consequuntur iure.\n \rQui non nisi odit ipsam esse adipisci et sit. Aut eius possimus voluptates et. Illo illum laudantium mollitia nulla velit molestiae omnis illum molestias. Et eligendi quam soluta sit deserunt natus. Accusantium quisquam iusto nobis consectetur impedit.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 16 },
    seo: {
      title: 'Intelligent Rubber Table | Zahradnictví u Juliuse',
      description:
        'Et beatae voluptatibus repellendus eaque illo dolores consequatur labore id.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Awesome Cotton Bacon',
    slug: 'Awesome-Cotton-Bacon',
    shortDesc: 'Sunt sit qui maiores quod eos dolor qui nihil.',
    description:
      'Dolores earum assumenda delectus fugiat error quas. Hic ut debitis distinctio reiciendis quibusdam. Mollitia iusto consectetur eaque omnis. Sunt necessitatibus enim non dignissimos explicabo assumenda cupiditate. Iste et cupiditate est. Dolorem tempore non.\n \rAsperiores neque labore velit inventore libero id recusandae ad. Praesentium sed deserunt commodi. Commodi cupiditate corporis sed delectus autem quia saepe placeat.\n \rId amet accusantium fuga tempore molestiae quam. At fugiat consequatur reiciendis. Non tempore non fugiat officiis et. Repellat enim praesentium nihil rem neque dolore accusantium deleniti numquam.\n \rIpsum optio voluptates illo. Non placeat esse eum deleniti tenetur iure iusto facere. Et ea ipsa sequi qui blanditiis.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 609,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 7 },
    seo: {
      title: 'Awesome Cotton Bacon | Zahradnictví u Juliuse',
      description: 'Sunt sit qui maiores quod eos dolor qui nihil.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Fresh Shirt',
    slug: 'Incredible-Fresh-Shirt',
    shortDesc: 'Vel accusamus repellat aspernatur sunt.',
    description:
      'Dolores perspiciatis rem error consectetur beatae sed. Aut sit ut quis rem consectetur. Molestiae aspernatur ullam omnis qui aut sunt. Aliquid voluptate corrupti magni numquam reiciendis quisquam maxime facere.\n \rIusto cumque minima similique aut. Provident architecto earum soluta quas adipisci nemo animi. Nostrum velit voluptas cumque iusto ut aperiam velit magnam minus. Qui omnis est exercitationem necessitatibus. Sit nesciunt nihil ea inventore error numquam quis praesentium est. Asperiores mollitia fugiat maiores.\n \rAut excepturi minima placeat voluptatum cum nisi. Et dolore odit accusantium non quia mollitia molestiae. Rerum voluptatem asperiores similique aut quia. Blanditiis quia ut. Et corporis ut. Voluptatem voluptatem illo tempora omnis illum.\n \rSunt velit commodi vel dolores ipsum quis. Similique temporibus voluptatem sit autem. Quam occaecati rerum ut voluptates nisi. Veniam voluptas sed. Optio nobis est soluta iste sunt et qui.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    price: 559,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 22 },
    seo: {
      title: 'Incredible Fresh Shirt | Zahradnictví u Juliuse',
      description: 'Vel accusamus repellat aspernatur sunt.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (5).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Incredible Soft Gloves',
    slug: 'Incredible-Soft-Gloves',
    shortDesc: 'Sunt sunt voluptate a voluptate illum sunt aut libero eaque.',
    description:
      'Sequi sapiente blanditiis officiis aperiam. Magnam suscipit autem exercitationem ut similique. Iste id dolorem natus quis unde rerum vel. Quidem fuga mollitia. Asperiores eveniet labore.\n \rSed qui molestiae quam molestiae architecto sit repudiandae totam. Et quo omnis rerum dolorem occaecati. Ea omnis voluptatem et dolores illum. Consequatur sapiente necessitatibus ex ab vitae consequatur maxime quis. Tempore et autem harum facere ipsa sint modi. Dolore non repellat rerum labore fugiat iste ut.\n \rAssumenda delectus quae. Velit animi deleniti veniam atque dolorum qui minus. Ipsum id ipsum vitae.\n \rDignissimos enim aut culpa modi. Maxime excepturi adipisci animi ab ipsam amet laudantium et. Tempora sequi sunt illo maxime. Et voluptates omnis omnis architecto. Praesentium qui ut eius quod voluptatem quis quis nihil.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image: 'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    price: 469,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 75 },
    seo: {
      title: 'Incredible Soft Gloves | Zahradnictví u Juliuse',
      description:
        'Sunt sunt voluptate a voluptate illum sunt aut libero eaque.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Generic Soft Soap',
    slug: 'Generic-Soft-Soap',
    shortDesc: 'Adipisci et natus quam iste ut.',
    description:
      'Est nostrum ut eaque ipsum vero aliquam neque maxime debitis. Voluptatem nostrum ipsum. Perspiciatis expedita animi soluta soluta et deleniti veniam ut. Autem optio occaecati excepturi est magni. Voluptate unde repellendus ea et eaque est corrupti inventore.\n \rSequi omnis et enim. Accusantium quis qui ut sit possimus id repudiandae molestiae totam. Est cupiditate voluptatem ducimus. Blanditiis quam accusantium veniam et sed non ut nihil veritatis.\n \rTotam et ipsam sapiente eaque sit quidem autem. Earum quis occaecati cum sint recusandae alias aut facere et. Quia aut adipisci autem eius voluptatem eum vel nostrum dolor. Rerum omnis tempora et dicta aut. Consequatur natus perferendis consequuntur.\n \rOdio iusto quis ut commodi et nihil nulla. Corporis laboriosam autem esse eaque. Assumenda et tenetur consequatur voluptatem. Id est aut est nulla atque molestiae. Vel delectus dolores est debitis voluptatem non veniam.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 55 },
    seo: {
      title: 'Generic Soft Soap | Zahradnictví u Juliuse',
      description: 'Adipisci et natus quam iste ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/rose-729509_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Tasty Cotton Shirt',
    slug: 'Tasty-Cotton-Shirt',
    shortDesc: 'Accusantium facere omnis voluptas sunt facere ipsa architecto.',
    description:
      'Maiores incidunt excepturi ipsa voluptatem illum totam aliquid. Exercitationem unde omnis cum qui velit debitis modi. Voluptatem cumque dolores cumque et corporis vero est. Eius magnam sint corporis sed qui temporibus doloribus.\n \rBeatae sit eos quaerat. Qui recusandae eligendi. Quia minus ea repudiandae ipsam eos consectetur.\n \rQuam est explicabo consequuntur sit. Atque sed quo odio voluptas expedita. Reiciendis qui tempore omnis qui sint placeat laboriosam.\n \rVel et ducimus sit necessitatibus eum. Accusamus enim repellendus accusamus blanditiis sequi ratione. Natus quidem reiciendis et at perspiciatis esse sunt sint. Architecto incidunt dolores. Excepturi ullam ut.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    price: 89,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 86 },
    seo: {
      title: 'Tasty Cotton Shirt | Zahradnictví u Juliuse',
      description:
        'Accusantium facere omnis voluptas sunt facere ipsa architecto.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (1).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Soft Computer',
    slug: 'Gorgeous-Soft-Computer',
    shortDesc: 'Non blanditiis recusandae autem in hic sunt labore.',
    description:
      'Ea vel et nesciunt vel ratione quas quisquam. Quibusdam quis necessitatibus earum ipsa laboriosam architecto totam ut tempore. Distinctio itaque fugit mollitia. Velit illo sint aut natus soluta repellat exercitationem ipsam quia. Fugiat fugit corrupti culpa.\n \rEt sint delectus rerum ad eum. Repellendus corrupti ipsam. Velit aut sed non sit.\n \rConsequatur adipisci itaque dolor. Assumenda voluptatum in ex distinctio. Inventore molestias praesentium aut voluptatem impedit praesentium exercitationem est recusandae. Voluptates sed dignissimos sint expedita est autem magnam quidem eius. Qui dicta voluptas distinctio ut laborum accusamus.\n \rCorporis laborum nostrum voluptatem esse. Odio nesciunt harum magni voluptatum sit voluptatem culpa. Ut explicabo dolorem.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    price: 209,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 53 },
    seo: {
      title: 'Gorgeous Soft Computer | Zahradnictví u Juliuse',
      description: 'Non blanditiis recusandae autem in hic sunt labore.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (2).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Sleek Metal Sausages',
    slug: 'Sleek-Metal-Sausages',
    shortDesc:
      'Ut soluta excepturi fuga voluptas qui dolorem iure fuga labore.',
    description:
      'Repellendus assumenda in in totam et. Velit eum doloremque sed et. Alias qui exercitationem ducimus vel.\n \rBeatae earum est ab. Provident ducimus ea. Numquam ea magnam voluptatem inventore. Amet dicta vel rerum est repellat quisquam et vel. Quos et placeat reprehenderit.\n \rNostrum blanditiis in sequi sunt quo. Cupiditate molestias eveniet magni eius hic. Quidem quo qui aut nesciunt hic aut praesentium.\n \rEt dolores possimus est et id eius consequatur soluta. Sed nostrum recusandae hic sit. Sint quis aspernatur incidunt et omnis quia libero.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    price: 379,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 11 },
    seo: {
      title: 'Sleek Metal Sausages | Zahradnictví u Juliuse',
      description:
        'Ut soluta excepturi fuga voluptas qui dolorem iure fuga labore.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Handmade Wooden Pants',
    slug: 'Handmade-Wooden-Pants',
    shortDesc: 'Quae quaerat expedita ab quam.',
    description:
      'Quia et enim ratione velit quas. Quia odio expedita. Beatae consequatur eos soluta nam vero itaque laborum. Fugit similique ab laboriosam aut natus tempora corporis.\n \rQuia et dolor quisquam et occaecati consequatur voluptas. Ex facilis iste soluta et nam neque. Sed veniam vel soluta exercitationem. Qui et consequatur doloribus veniam corrupti quod. Esse et et corrupti amet quibusdam est non aut quaerat. Distinctio officiis est dolores pariatur maxime quia in et.\n \rIn est odio occaecati. Nihil illum qui rerum. Ut porro sit aut perspiciatis aut non amet quibusdam molestiae. Rerum asperiores aspernatur dolorum quos dolores nihil dolores esse.\n \rCumque minima et quae voluptates explicabo vel iste ut maiores. Et consequatur aut mollitia voluptatum aut voluptatem nesciunt sed. Temporibus et autem quibusdam. Et enim eum porro. Voluptatem impedit qui. Omnis dicta iusto iusto provident tempora non expedita voluptates.',
    category: {
      name: 'Růže',
      slug: 'ruze',
      background: 'https://api-dp-eshop.web.app/images/cat/ruze.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 81 },
    seo: {
      title: 'Handmade Wooden Pants | Zahradnictví u Juliuse',
      description: 'Quae quaerat expedita ab quam.',
      image:
        'https://api-dp-eshop.web.app/images/products/ruze/New Project (4).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Licensed Concrete Hat',
    slug: 'Licensed-Concrete-Hat',
    shortDesc: 'Provident et non maxime tenetur alias dolores.',
    description:
      'Reprehenderit officiis est corrupti vero. Dolor qui ullam fugit. Mollitia ea nihil aut suscipit itaque labore dolorem corporis assumenda.\n \rLaboriosam mollitia cum sit illo laborum corrupti. Ut sequi nobis qui ut tenetur explicabo. Ipsa ut autem eos sequi est odio necessitatibus voluptas. Repellat aut vero. Est itaque aut sed distinctio optio. Ab repellat architecto corrupti omnis.\n \rProvident officiis eum quia et beatae illum. Et velit culpa nisi voluptas aspernatur. Nostrum consequatur veniam. Enim labore non unde labore officia dolorum. Ducimus dolor occaecati dolorem. Libero at in suscipit quam molestiae recusandae velit sed ea.\n \rTotam ipsam quia in non. Iure impedit eveniet aspernatur enim est. Maiores asperiores fugiat aliquid soluta. Earum quas dignissimos ipsa molestias accusamus doloremque debitis ab.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 91 },
    seo: {
      title: 'Licensed Concrete Hat | Zahradnictví u Juliuse',
      description: 'Provident et non maxime tenetur alias dolores.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Granite Shirt',
    slug: 'Rustic-Granite-Shirt',
    shortDesc:
      'Voluptatibus quam aut et sit molestiae tenetur nostrum dolor aperiam.',
    description:
      'Debitis dolore repellendus et perferendis animi in omnis assumenda eos. Et voluptates error inventore officia. Ut quia iusto eligendi qui error voluptatem.\n \rImpedit minima reprehenderit. Nemo eligendi earum quidem non omnis aliquam esse accusantium. Sequi dolor ipsa natus modi et.\n \rAliquam unde maiores asperiores dolorum repellendus ipsum. Hic perspiciatis illo est. Voluptatem autem numquam quos quo. Et et error ullam eos perspiciatis voluptatem sint sit. Voluptatem et et voluptatem doloremque facere molestiae. Est beatae voluptas vitae corrupti perspiciatis exercitationem voluptatem.\n \rModi maxime culpa vitae corrupti. Cumque quos occaecati eaque enim. Debitis cum aperiam eum ea et. Consectetur a modi. Fugiat sed ut eum qui sit qui. Amet placeat nobis nihil.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 219,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 46 },
    seo: {
      title: 'Rustic Granite Shirt | Zahradnictví u Juliuse',
      description:
        'Voluptatibus quam aut et sit molestiae tenetur nostrum dolor aperiam.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Ergonomic Soft Salad',
    slug: 'Ergonomic-Soft-Salad',
    shortDesc:
      'Voluptatem voluptas optio voluptatem sint voluptatibus autem non commodi.',
    description:
      'Unde ratione omnis. Voluptatem consequatur modi sint quia sed quisquam voluptatem. Eligendi qui veritatis sed ut totam consequuntur et.\n \rVoluptatem est soluta cum nobis. Qui numquam voluptatem rerum. Totam commodi omnis qui.\n \rVoluptate qui in aut labore consequuntur cumque magnam. Ut minima eum. Error laudantium veritatis fugiat. Nisi non atque commodi perspiciatis perspiciatis vero.\n \rQuia ea debitis blanditiis cupiditate. Aut deleniti dolores consequatur. Ducimus maiores ad consequuntur ut neque quis.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Ergonomic Soft Salad | Zahradnictví u Juliuse',
      description:
        'Voluptatem voluptas optio voluptatem sint voluptatibus autem non commodi.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fantastic Granite Chicken',
    slug: 'Fantastic-Granite-Chicken',
    shortDesc: 'Molestiae quasi beatae placeat ipsam.',
    description:
      'Ut aperiam exercitationem ea amet voluptatem. Quia quos velit autem non natus. Rerum rerum quam ducimus quidem voluptates ullam. Odit qui enim reprehenderit incidunt consectetur dolores aut. Et nostrum assumenda quibusdam quidem id modi iste et.\n \rConsequatur sit sunt sed corrupti esse at eos sed illo. Mollitia quia dolor occaecati atque veniam. Harum nesciunt reiciendis ipsam ex. Suscipit aspernatur commodi id occaecati labore eum fugiat.\n \rEt excepturi eligendi distinctio esse. Hic facilis velit architecto repellendus itaque rerum odio. Fugiat ex sunt quae illum ut. Ut quos odio magni quis dolor reiciendis recusandae illum et.\n \rAmet quis voluptas molestiae omnis cumque. Dicta veniam aut eius qui minus ab sunt recusandae suscipit. Impedit rem similique. Eos distinctio sed.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 439,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 16 },
    seo: {
      title: 'Fantastic Granite Chicken | Zahradnictví u Juliuse',
      description: 'Molestiae quasi beatae placeat ipsam.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Refined Plastic Bike',
    slug: 'Refined-Plastic-Bike',
    shortDesc: 'Quis incidunt laboriosam illum consequatur asperiores.',
    description:
      'Laborum dolorem dicta repudiandae aperiam laboriosam perspiciatis sapiente saepe. Molestiae voluptatem saepe voluptatem ipsum inventore. Necessitatibus repellat et. Voluptatibus officia sint. Rerum reiciendis quia rerum harum distinctio.\n \rQui tenetur ab ea illo ab aspernatur numquam. Consequatur neque culpa doloremque eligendi est. Aut voluptatibus qui. Consequuntur eum quasi et harum nesciunt ipsum hic ullam.\n \rUnde dolor voluptas. Modi odio nulla. Ut impedit nulla assumenda voluptatem.\n \rDolorem rem non pariatur at accusamus repellat. Quod qui velit. Neque omnis dicta at quaerat at et earum officiis.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 469,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 8 },
    seo: {
      title: 'Refined Plastic Bike | Zahradnictví u Juliuse',
      description: 'Quis incidunt laboriosam illum consequatur asperiores.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Refined Rubber Soap',
    slug: 'Refined-Rubber-Soap',
    shortDesc:
      'Qui fugiat est accusamus debitis voluptatem aut excepturi veniam.',
    description:
      'Sint dignissimos ducimus amet sint tenetur quia. Ullam aspernatur officiis tempora error architecto est eos. Odio sed ut est dolores sunt aperiam recusandae. Beatae error atque et ipsa atque quo illo.\n \rInventore molestiae natus unde voluptatum nulla. Est consequatur quia laborum nesciunt provident ad quia esse a. Exercitationem earum sequi et eos at deleniti.\n \rExcepturi qui alias quisquam. Tempore voluptas autem dolore rerum officiis excepturi vel labore. Nemo sunt velit et eos. Alias eum cumque nulla iure et. Voluptatum cumque quo eveniet et at eaque tempore architecto.\n \rCulpa officiis nihil est illo eum delectus. Ea aut excepturi et vel totam. Voluptatem et sed saepe quia dolorem voluptates itaque.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 8 },
    seo: {
      title: 'Refined Rubber Soap | Zahradnictví u Juliuse',
      description:
        'Qui fugiat est accusamus debitis voluptatem aut excepturi veniam.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Rustic Wooden Pizza',
    slug: 'Rustic-Wooden-Pizza',
    shortDesc: 'Quia corrupti architecto omnis.',
    description:
      'Cum sint doloremque voluptate veniam sed qui et. Rem perspiciatis omnis praesentium distinctio. Placeat ut natus consequuntur ut iure explicabo quidem sunt ipsam.\n \rArchitecto voluptatem nihil sint odit. Error et eaque voluptatibus architecto ut laudantium. Ipsam illo quisquam ut velit. Natus autem aut et.\n \rMolestias repellendus doloribus. Ad dolorum neque rerum officia et excepturi tempora. Dolorem molestiae quas libero consequuntur tempore omnis eveniet sed dolores. Ipsa sed sunt odio ut unde et. Nihil est unde sed est. Earum autem quia amet eligendi mollitia et necessitatibus.\n \rRem quaerat est ea occaecati. Nisi rerum a est velit ipsam laudantium dolores. Atque distinctio maiores ut. Magni voluptas eveniet nulla tenetur. Ab debitis reiciendis repudiandae rerum repellat et. Rerum odit adipisci sed reprehenderit.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 469,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 56 },
    seo: {
      title: 'Rustic Wooden Pizza | Zahradnictví u Juliuse',
      description: 'Quia corrupti architecto omnis.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Licensed Granite Pizza',
    slug: 'Licensed-Granite-Pizza',
    shortDesc: 'Sit totam qui expedita.',
    description:
      'Molestias sed minima et. Modi voluptate nemo sint sunt sunt et in consequuntur similique. Beatae dicta neque velit magni aut ut ea a molestiae.\n \rRecusandae enim blanditiis quia modi qui nihil. Dolores provident enim explicabo explicabo necessitatibus ut. Adipisci quibusdam molestiae. Doloremque ipsa ullam alias voluptas qui eaque consequatur dolorum impedit. Quae totam corrupti alias sequi nam et odit. Consequatur similique non rerum quia et adipisci nam animi exercitationem.\n \rReiciendis qui quos et eum illum non error. Ratione praesentium et laudantium autem a facilis itaque saepe excepturi. Et aliquam esse saepe et doloremque recusandae. Architecto accusantium dolor quas distinctio et qui nihil quidem. Optio amet id illo a ullam qui voluptas non. Maiores maxime quia quisquam.\n \rAliquid deleniti non assumenda temporibus est voluptate consequatur culpa. Eligendi corporis magni est ipsa voluptatibus. Iste id explicabo distinctio dolorem est quis est. Dolorem id velit alias excepturi dolores repudiandae tempore autem. Voluptatem dolorem et.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Licensed Granite Pizza | Zahradnictví u Juliuse',
      description: 'Sit totam qui expedita.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Refined Steel Table',
    slug: 'Refined-Steel-Table',
    shortDesc: 'Esse quos autem rerum dolore voluptates libero quam quam.',
    description:
      'Rerum consequatur eos debitis saepe rerum quis labore. Vero eum provident distinctio sed aut. Corrupti adipisci temporibus et et ut enim qui qui deleniti.\n \rSimilique nam ad molestias occaecati qui occaecati et similique tempora. Nihil ab adipisci delectus nulla doloremque. Totam asperiores dolorem amet voluptatem tempora.\n \rLaboriosam harum voluptas et. Eos molestiae eum cupiditate similique excepturi delectus dolores veniam. Vitae eos nostrum. Nemo quos laboriosam rerum. Deserunt quia qui odit fuga numquam.\n \rEa sed quidem porro amet voluptate et dicta modi est. Laudantium unde est sed. Enim aliquid aut autem quia omnis ut fugit. Quam tenetur eaque doloremque. Eius vel vero aspernatur quibusdam ut sunt. Nihil atque odio porro nemo aliquam iste.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 169,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 19 },
    seo: {
      title: 'Refined Steel Table | Zahradnictví u Juliuse',
      description: 'Esse quos autem rerum dolore voluptates libero quam quam.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Cotton Ball',
    slug: 'Gorgeous-Cotton-Ball',
    shortDesc: 'Iure iste et eaque.',
    description:
      'Assumenda omnis qui ipsum rerum omnis. Debitis voluptatem laborum voluptas omnis voluptatibus ducimus delectus. Exercitationem corporis aperiam deleniti eius voluptas aut aut facere.\n \rEt sit ad ab incidunt quaerat. Libero accusantium a deserunt deleniti mollitia corporis unde. Quisquam magnam et ut quisquam enim quas quae.\n \rIllo cupiditate corrupti amet consequatur molestiae aliquam et recusandae. Velit id ratione itaque quos. Non totam minus.\n \rQuaerat eos sit nostrum accusantium. Ut qui saepe quis soluta animi quia molestiae veniam architecto. Debitis id saepe laborum quibusdam hic eaque quia. Rerum rerum vitae nostrum sed et quaerat temporibus perferendis. Eligendi perferendis hic non. Magni omnis sint velit incidunt quisquam blanditiis tempore.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 309,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 97 },
    seo: {
      title: 'Gorgeous Cotton Ball | Zahradnictví u Juliuse',
      description: 'Iure iste et eaque.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Granite Shoes',
    slug: 'Incredible-Granite-Shoes',
    shortDesc: 'Velit nulla quis et quod.',
    description:
      'Repellat et in quisquam labore illum. Deleniti tempore harum ad rem rem. Mollitia voluptatem tempora sapiente. Quia eaque pariatur et. Perferendis eveniet voluptatem enim. Libero quo reiciendis et numquam sint et voluptate quia.\n \rEt velit voluptatibus tempora natus autem aut alias ratione similique. Consequatur quasi recusandae rem consequatur et et in. Sed nesciunt fugit accusamus facilis aut velit voluptatem. Molestiae cupiditate sint. Rerum ipsam eligendi similique dolores nisi illum commodi.\n \rAut quo deserunt voluptatem aut sed iste. Facilis aut doloribus neque. Occaecati quis et molestias cupiditate omnis. Nulla reprehenderit culpa est esse dolore ullam sit. Excepturi repellat quod aut maiores harum.\n \rPorro nostrum voluptatibus nostrum iusto voluptas quidem. Sapiente doloremque impedit. Et nulla aperiam. Et tempora ipsum quis facere sapiente maxime aliquid quia saepe. Sed incidunt totam quia assumenda ex voluptatem nisi.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 80 },
    seo: {
      title: 'Incredible Granite Shoes | Zahradnictví u Juliuse',
      description: 'Velit nulla quis et quod.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Rustic Rubber Shirt',
    slug: 'Rustic-Rubber-Shirt',
    shortDesc: 'Voluptatum sunt quisquam et ea sunt ut dolores ipsum natus.',
    description:
      'Suscipit necessitatibus molestias commodi. Beatae impedit sunt id consequatur beatae eaque dolores assumenda ab. Reprehenderit est numquam modi dolores architecto doloremque ea sit nihil. Perspiciatis aliquid eligendi. Ratione laborum dolorum dolorem repudiandae laudantium.\n \rEaque et sed quo deserunt exercitationem vel voluptatibus. Rerum in molestiae vero velit. Et corporis exercitationem aut nihil assumenda error eum repellat. Autem itaque non fugit fuga dolor saepe fugit aperiam.\n \rA molestiae quam quidem quod id enim. Eos aut odit assumenda est debitis. Magnam magni molestiae animi.\n \rImpedit asperiores nam culpa laborum. Facere labore similique fugit natus in sit perspiciatis similique. Ea facilis consequatur. Nesciunt quidem voluptatem aut.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 599,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 86 },
    seo: {
      title: 'Rustic Rubber Shirt | Zahradnictví u Juliuse',
      description:
        'Voluptatum sunt quisquam et ea sunt ut dolores ipsum natus.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Practical Concrete Cheese',
    slug: 'Practical-Concrete-Cheese',
    shortDesc: 'Sed consequatur nulla ut omnis minima perferendis eos iure.',
    description:
      'Et repudiandae cum recusandae ad quo quia rerum. Voluptatem quidem a provident sit hic architecto. Est libero ipsam cupiditate modi animi. Reprehenderit sunt enim eius.\n \rCupiditate non qui incidunt est maxime sit iure similique. Quia qui quia enim hic quasi assumenda expedita ullam doloremque. Et sint veritatis reprehenderit saepe natus excepturi qui. Veritatis dolor odit quasi. Molestias quis ullam cupiditate vel sint consequatur. Aut eligendi fugit quibusdam vero.\n \rQuasi adipisci ad consequatur est saepe aliquid id voluptas quia. Et quisquam quisquam ipsa accusamus at. Pariatur aliquam ad explicabo assumenda perferendis.\n \rLaboriosam et et beatae ut nemo dicta rem voluptas odio. Possimus ea dolorem dolores. Adipisci voluptatum iure est hic error rerum molestiae dolores amet. Debitis hic quo ab aspernatur laudantium rerum numquam quis.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 21 },
    seo: {
      title: 'Practical Concrete Cheese | Zahradnictví u Juliuse',
      description:
        'Sed consequatur nulla ut omnis minima perferendis eos iure.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Gorgeous Rubber Gloves',
    slug: 'Gorgeous-Rubber-Gloves',
    shortDesc: 'Atque laudantium omnis id est quis illo debitis quo est.',
    description:
      'Dolorem quia voluptas et quis qui. Qui voluptatem quo assumenda beatae ab. Rerum eligendi quae aspernatur quia voluptatem error. Consequatur labore aspernatur commodi ea culpa aspernatur quia ducimus. Vero fugit doloribus facere sapiente facilis rerum corporis.\n \rCommodi illum dignissimos velit consequatur repellat. Iste ut vitae commodi. Fuga ut repellendus magni soluta consequatur cum fugit sed qui.\n \rA voluptatem debitis voluptatem qui vel officia. Fugit pariatur impedit officia voluptas voluptas dolorum. Quo et rem provident quia consequatur dolores. Autem qui fuga ea. Deserunt a veritatis doloribus in sunt sequi.\n \rEligendi placeat eligendi est aspernatur corrupti deleniti qui ut enim. Quia et ab. Alias et odit autem nihil odio magni.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 229,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 67 },
    seo: {
      title: 'Gorgeous Rubber Gloves | Zahradnictví u Juliuse',
      description: 'Atque laudantium omnis id est quis illo debitis quo est.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Small Granite Bike',
    slug: 'Small-Granite-Bike',
    shortDesc: 'Hic quas et at asperiores placeat enim quos.',
    description:
      'Dicta vel ut. Sunt architecto quia. Ab et cum. Sequi saepe sit. Ab beatae ab magnam.\n \rEt pariatur consequatur commodi et doloribus. Deleniti voluptates pariatur modi corrupti saepe veritatis explicabo magni repellat. Illum vero ipsam excepturi maiores aperiam eveniet autem. Qui sunt quam itaque nulla harum harum dolorem facere quam. Accusamus ut quia recusandae vel inventore ut dolor commodi saepe.\n \rMaxime sapiente alias iste nam est rerum reprehenderit qui facilis. Temporibus nisi suscipit aut enim. Adipisci porro ea odio beatae corporis. Nisi optio modi omnis perspiciatis. Debitis quos doloremque suscipit minima et hic inventore accusamus unde.\n \rDelectus et dolorem quis. Laborum sed et. Vitae nisi sit. Voluptatum quaerat voluptatibus eligendi sint voluptatem aut maxime quia quia. Saepe sunt mollitia quos ipsum possimus aut.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 78 },
    seo: {
      title: 'Small Granite Bike | Zahradnictví u Juliuse',
      description: 'Hic quas et at asperiores placeat enim quos.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Wooden Ball',
    slug: 'Practical-Wooden-Ball',
    shortDesc: 'Consequatur rem nesciunt eaque est ut qui ipsam assumenda.',
    description:
      'Tempora culpa aut est repellat. Qui deleniti delectus voluptatem in. Eos consequatur adipisci culpa at voluptatum ut ducimus molestias voluptas. Omnis omnis recusandae ut tenetur culpa perspiciatis numquam eaque quis. Commodi voluptas officiis et sint quos facilis a. Est voluptas consectetur sed est dolorum dignissimos explicabo voluptas cumque.\n \rCum sunt sunt labore dolorem qui laudantium. Sunt nesciunt autem quia voluptatem ipsa odio veniam quod. Ut culpa est optio qui odio quo aliquam eos. Qui sequi esse saepe deserunt accusamus molestiae. Est et sed et ipsum et molestiae autem minima. Voluptatem ea laboriosam ut quas.\n \rSequi non saepe sequi. In dolorum voluptas id ex voluptatem qui nesciunt non nisi. Nisi iste facilis sint neque neque numquam. Ullam ut necessitatibus dignissimos voluptas unde. Voluptatibus exercitationem quod omnis itaque debitis cumque quaerat asperiores. Veniam provident ea sit.\n \rEveniet ut consequatur enim impedit qui adipisci harum quas ipsa. Aspernatur vel quam ratione voluptatem. Delectus saepe sed occaecati animi dicta fuga aliquid omnis repudiandae. Velit ipsa iste voluptate.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 25 },
    seo: {
      title: 'Practical Wooden Ball | Zahradnictví u Juliuse',
      description: 'Consequatur rem nesciunt eaque est ut qui ipsam assumenda.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Tasty Wooden Salad',
    slug: 'Tasty-Wooden-Salad',
    shortDesc: 'Eum nihil omnis est nihil.',
    description:
      'Nesciunt optio facilis voluptatem harum reiciendis voluptatibus optio. Ad possimus deserunt quam quia iste. Eum tempora ex.\n \rMagni molestias sint non molestias aut. Aperiam consequatur alias provident autem. Omnis omnis omnis quaerat recusandae quasi architecto facere et. Aut amet adipisci sed quo cum est maxime ut.\n \rCorporis sed fugiat omnis atque. Consequuntur hic eum mollitia consequatur reiciendis veritatis exercitationem dicta. Numquam provident accusantium consequuntur est facilis est veniam doloribus molestias. Nemo dolor aut soluta. Et rerum doloribus iure beatae libero aperiam suscipit aliquid tempora.\n \rTempore natus magnam adipisci voluptas rerum tempora aperiam facilis ducimus. Quo quia qui expedita hic cupiditate in voluptatem explicabo. Quia eius fugiat at atque ducimus.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 21 },
    seo: {
      title: 'Tasty Wooden Salad | Zahradnictví u Juliuse',
      description: 'Eum nihil omnis est nihil.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Refined Cotton Bike',
    slug: 'Refined-Cotton-Bike',
    shortDesc: 'Sequi est libero quia.',
    description:
      'Voluptas molestias maiores magni enim quia. Sequi et reiciendis necessitatibus sapiente iste facilis incidunt facere. Nihil ut rem. Adipisci voluptatum laboriosam amet iure quis quo debitis. In aperiam molestiae quidem. Deserunt quisquam esse rerum nemo iste et.\n \rIste vitae facere in laudantium ut quo. Aut non et iusto vero dolorem nesciunt rem perferendis inventore. Consequatur molestiae aliquam tempore aut repellendus.\n \rConsequatur dolorem aut ratione voluptas accusantium eius. Harum nemo velit dicta amet beatae voluptatem. Assumenda illo beatae saepe. Similique vitae ea quis eaque distinctio est voluptate. Officiis consequuntur veritatis porro fugit dolorem consequatur officiis assumenda. Voluptatem sit et doloribus est eos quia.\n \rMagni qui perferendis voluptate quas sunt aut quibusdam. Sunt voluptatum est accusamus vel occaecati dolorem consectetur quo a. Aut corrupti nam.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 34 },
    seo: {
      title: 'Refined Cotton Bike | Zahradnictví u Juliuse',
      description: 'Sequi est libero quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Handmade Granite Ball',
    slug: 'Handmade-Granite-Ball',
    shortDesc:
      'Reprehenderit dolor labore cum sunt doloremque non enim aut eos.',
    description:
      'Laborum sint omnis temporibus adipisci consequatur consequatur. In reprehenderit sit et distinctio culpa iusto optio. Fugit enim aspernatur enim et beatae in.\n \rEsse corporis temporibus ex totam fugiat. Vero aliquam architecto maiores odio ut id necessitatibus quo dolores. Rerum ab nobis necessitatibus eum. Dolor eaque id quos ullam labore molestias dolor voluptatem. Perspiciatis et minima et et dignissimos non.\n \rDolorum beatae et et. Ab delectus facilis facilis earum odio earum. Totam sunt labore sapiente aut voluptate ut eum quas error.\n \rDoloribus rerum maxime deserunt quia inventore odio fugiat. Dignissimos eum nihil iusto aut. Illum quae sit odio aspernatur nam voluptatem provident quae est. Laudantium fuga ab esse.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 429,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 63 },
    seo: {
      title: 'Handmade Granite Ball | Zahradnictví u Juliuse',
      description:
        'Reprehenderit dolor labore cum sunt doloremque non enim aut eos.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Licensed Rubber Chicken',
    slug: 'Licensed-Rubber-Chicken',
    shortDesc: 'Architecto ipsa itaque.',
    description:
      'Vitae illo temporibus in ea quasi voluptas. Numquam ut voluptate possimus. Placeat et autem hic quis voluptatem quasi corrupti placeat quae. Cupiditate odio quia quam dolorem voluptas.\n \rNemo voluptas doloremque. Consequuntur ea adipisci illum aliquam repudiandae reprehenderit. Ipsa vitae nemo qui nihil dolorem inventore praesentium. Eaque dicta quasi minima distinctio quas eos quisquam delectus consectetur. Quis voluptas nihil nemo consequatur.\n \rNihil aut enim aut nemo ducimus vitae. Qui consectetur sed quibusdam dolores magnam adipisci laborum nihil. Animi omnis ipsam. Quidem sed nam ipsa fugit. Maiores corporis et dolorem quia molestiae enim qui.\n \rCorrupti laborum sit sed ipsam. Inventore quos autem non at voluptatem reiciendis ut quasi atque. Autem inventore molestias aperiam vitae in assumenda voluptatem. Inventore quos minus ratione ducimus et ab.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 339,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 87 },
    seo: {
      title: 'Licensed Rubber Chicken | Zahradnictví u Juliuse',
      description: 'Architecto ipsa itaque.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Handcrafted Steel Hat',
    slug: 'Handcrafted-Steel-Hat',
    shortDesc:
      'Quis fugit impedit accusantium delectus molestiae aut architecto vero.',
    description:
      'Suscipit repellendus quis aut ratione. Voluptas dolor amet. Possimus fuga ut nihil. Velit omnis tempora rerum. Minus accusantium illo totam. Sed quibusdam beatae.\n \rDolor error et ut. Impedit rem voluptatibus unde. Ut nobis est. Nihil ut dolorem corrupti a corrupti non qui voluptate. Rerum sint similique. Optio aspernatur quia praesentium ut.\n \rVoluptas omnis est eos ad cumque sed. Fugiat delectus quae deleniti mollitia. Eius provident quia suscipit voluptatem. Rerum eos illum esse porro dolorem. Id sunt eaque.\n \rQuaerat sed alias. Dicta ab in autem necessitatibus. Praesentium sit dolor unde. Esse perferendis voluptatem facilis magni dolor omnis iste et.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 479,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Handcrafted Steel Hat | Zahradnictví u Juliuse',
      description:
        'Quis fugit impedit accusantium delectus molestiae aut architecto vero.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Fantastic Fresh Chicken',
    slug: 'Fantastic-Fresh-Chicken',
    shortDesc: 'Cupiditate provident in neque neque nam.',
    description:
      'Molestiae praesentium ut autem commodi inventore dolor. Expedita quibusdam autem sunt ab. Tenetur doloremque alias et. Ab eos eos.\n \rSit culpa iste tenetur. Animi est qui ut ea vel. Explicabo recusandae sunt quisquam quo perspiciatis ullam reprehenderit. Qui velit dolores repellendus omnis necessitatibus. Quis excepturi necessitatibus ipsam architecto quia. Totam nulla vitae non dolores voluptas ipsum.\n \rAperiam alias qui a voluptatem inventore et fuga. Sed qui quis eaque atque illo tempore repudiandae placeat voluptatem. Officia nam voluptatibus cum iure. Nihil ea fugiat iusto maiores. Aspernatur asperiores dolor et vel nihil pariatur aut.\n \rRerum non maxime corporis at illo fuga praesentium ullam. Autem omnis ipsam. Animi id recusandae laborum. Temporibus alias repellendus sunt quam voluptas et. At esse adipisci nihil distinctio dolor quia eaque.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 39,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 8 },
    seo: {
      title: 'Fantastic Fresh Chicken | Zahradnictví u Juliuse',
      description: 'Cupiditate provident in neque neque nam.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Rustic Metal Chicken',
    slug: 'Rustic-Metal-Chicken',
    shortDesc:
      'Quam debitis necessitatibus voluptatem numquam pariatur praesentium.',
    description:
      'Aut et incidunt. Sit ut iure aut voluptatibus. Aliquid nostrum animi. Hic incidunt et. Rerum occaecati sequi voluptas est dolor incidunt libero possimus voluptas.\n \rExercitationem quaerat consequuntur sapiente aut atque officia vel. Accusamus quibusdam numquam tempore nulla ratione voluptas odit. Dolores sit id. Omnis distinctio voluptatem animi. Iusto tenetur repudiandae ut a nulla molestiae cupiditate nemo.\n \rQuaerat rerum expedita sapiente et similique ipsum exercitationem. Sed quia et corrupti atque iure ea laboriosam quam consequuntur. Amet alias rerum sint laborum.\n \rEst excepturi minima aspernatur ullam. Sed atque qui accusantium harum quos illo molestiae quisquam. Est est suscipit aut.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 429,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 17 },
    seo: {
      title: 'Rustic Metal Chicken | Zahradnictví u Juliuse',
      description:
        'Quam debitis necessitatibus voluptatem numquam pariatur praesentium.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Sleek Soft Tuna',
    slug: 'Sleek-Soft-Tuna',
    shortDesc:
      'Saepe necessitatibus asperiores explicabo et quo voluptatum ad veritatis blanditiis.',
    description:
      'Animi sunt magni delectus enim ducimus enim id dolores deleniti. Est asperiores itaque voluptatem illo sit et fugit reiciendis dolorem. Voluptatem occaecati repudiandae esse corrupti quod fugit repudiandae est et. Eos voluptas natus nihil vero iure sunt aperiam eos veniam. At aut rerum libero consequatur aliquid impedit voluptatem vero quia. Accusamus veritatis ipsum est minima.\n \rUt omnis ab reiciendis adipisci doloribus qui laudantium quam. Eos eaque maiores enim voluptatum quia consequatur maiores dolor fuga. Nihil molestiae sed maxime facilis. Est ea sit facilis aut ipsum et. Necessitatibus ullam doloremque quae rerum. Quo iusto vitae architecto ea voluptate.\n \rNisi ducimus itaque ipsa modi enim. A sint aut ratione iusto vel ipsam beatae. Enim voluptatum minima quo quibusdam laudantium. Sapiente rerum consectetur. Alias fugiat omnis et ut. Perferendis ad in deserunt officia.\n \rQui dolore sequi necessitatibus deleniti. Ut natus veniam soluta sint libero assumenda sint reiciendis. Sit commodi totam et ut odit ratione. Accusamus et et et veniam cumque. Amet culpa nam tempore sequi.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 87 },
    seo: {
      title: 'Sleek Soft Tuna | Zahradnictví u Juliuse',
      description:
        'Saepe necessitatibus asperiores explicabo et quo voluptatum ad veritatis blanditiis.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Generic Rubber Sausages',
    slug: 'Generic-Rubber-Sausages',
    shortDesc: 'Voluptatem error minima voluptas molestiae autem nisi.',
    description:
      'Facilis quo unde eum qui doloribus et et. Qui distinctio rerum enim sed. Tempore provident sit aut quis nisi quia. Ea molestiae maiores.\n \rAut itaque molestiae esse sit quisquam. Dicta occaecati praesentium atque eum dolor quis. Aut assumenda labore consequuntur odio ratione ut.\n \rAccusamus magni officiis voluptates voluptas distinctio adipisci consequatur dignissimos aliquam. Consequatur dolor repudiandae sunt sit. Omnis est minus magni libero possimus maiores esse deleniti. Id ut perspiciatis ut. Placeat consequatur ut perspiciatis sunt libero qui enim maiores.\n \rAutem magnam ullam aut asperiores deserunt sed libero aut. Autem officiis cupiditate ut eos sequi. Corporis dolorum mollitia doloribus impedit distinctio dolor id. Consequatur est itaque nobis dolor commodi. Nam quia corporis quia esse placeat nulla ullam hic.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 39 },
    seo: {
      title: 'Generic Rubber Sausages | Zahradnictví u Juliuse',
      description: 'Voluptatem error minima voluptas molestiae autem nisi.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handmade Metal Pants',
    slug: 'Handmade-Metal-Pants',
    shortDesc: 'Voluptas aut aut numquam nesciunt quae ratione.',
    description:
      'Et inventore asperiores voluptate animi qui cumque vitae qui officia. Qui ut impedit qui. Nobis esse nemo itaque nostrum illo. Numquam provident blanditiis nesciunt officia officiis aut beatae ea. Qui impedit voluptas sint rerum aut dolorum.\n \rNobis non illum tempora rerum unde id voluptatem in ea. Nam sit et itaque beatae qui vitae quaerat. Velit tenetur mollitia. Optio doloremque enim reprehenderit qui sed labore. Aut ut ducimus suscipit rerum voluptate consequatur. Repudiandae nostrum amet temporibus.\n \rEt vel quo alias vitae. Reiciendis rerum dolorum eum distinctio debitis corrupti harum eos molestias. Sint saepe dignissimos.\n \rOmnis non nihil est quidem eius blanditiis. Et consectetur soluta dolorem et reiciendis. Praesentium assumenda ut beatae illo. Vero aperiam quaerat. Maiores sed voluptas sed.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 43 },
    seo: {
      title: 'Handmade Metal Pants | Zahradnictví u Juliuse',
      description: 'Voluptas aut aut numquam nesciunt quae ratione.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Metal Bacon',
    slug: 'Practical-Metal-Bacon',
    shortDesc: 'Labore aut aut officia ut voluptate esse.',
    description:
      'Cupiditate suscipit iure inventore. Voluptas et voluptas doloribus illum quae unde sint adipisci. Numquam vitae itaque non vel. Eius aut non temporibus aut velit autem aut.\n \rQuas fuga facilis provident laboriosam. Perspiciatis soluta a aut ducimus ex illo quia voluptatum. Libero qui et in natus qui ut voluptatem quidem laudantium.\n \rCumque nisi molestiae hic. Molestiae praesentium nisi et et ratione. Fugiat eligendi non repellat et eaque dolores. Beatae quae est aut tempore expedita molestiae ea.\n \rSuscipit nihil consequatur. Placeat mollitia repudiandae distinctio ducimus a ut. Dolores voluptas enim eius perspiciatis itaque rerum in quaerat. Error recusandae dolores.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 139,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 19 },
    seo: {
      title: 'Practical Metal Bacon | Zahradnictví u Juliuse',
      description: 'Labore aut aut officia ut voluptate esse.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Refined Cotton Towels',
    slug: 'Refined-Cotton-Towels',
    shortDesc:
      'Et dolorem voluptas beatae officia sed et laboriosam dolores natus.',
    description:
      'Laudantium at fugiat beatae eaque debitis praesentium odio perspiciatis. Similique sit ea et suscipit. Excepturi et qui officiis eum. Sunt id pariatur voluptates sed neque eaque minus ut reiciendis. Qui consequatur eos id aspernatur excepturi recusandae quia.\n \rMinus dolorem iure nostrum sit fugit qui similique unde. Dolorem molestias eius odio rerum eum adipisci nulla alias autem. Magni officia voluptas. Delectus enim nesciunt.\n \rCorrupti est ut deleniti enim eum sunt dolorem fuga. Cum impedit animi nihil. Reiciendis accusamus aut autem amet ducimus aliquam blanditiis dolorum amet. Maiores enim adipisci quae est nihil.\n \rConsequatur tempora quaerat voluptas accusantium qui facilis. Vitae voluptate neque. Et quaerat quam omnis consequuntur libero dolor quaerat.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 3 },
    seo: {
      title: 'Refined Cotton Towels | Zahradnictví u Juliuse',
      description:
        'Et dolorem voluptas beatae officia sed et laboriosam dolores natus.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Licensed Steel Car',
    slug: 'Licensed-Steel-Car',
    shortDesc: 'Quasi autem dolorem perferendis ab perferendis.',
    description:
      'Incidunt dolores aut tempora dolorem omnis omnis et eaque. Nihil vero delectus sed. Possimus quas voluptas iste dolorem ut. Sit in quod fugiat iste ex. Sit esse eum maiores.\n \rVeniam aut enim exercitationem libero. Et est numquam sed illo accusantium ab. Dolorum debitis veniam ratione quis non. Praesentium praesentium et suscipit beatae. Tempore sed eaque. Expedita natus sit quam.\n \rIncidunt assumenda fugit ullam est. Quis delectus quas minus non sit. Dolore iusto velit. In aut occaecati magnam eum qui molestias.\n \rQuam vitae error occaecati qui similique magni. Nulla rem ea voluptate voluptatem omnis a. Illo aut est saepe ea. Nisi cum sit non necessitatibus sed.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 149,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 10 },
    seo: {
      title: 'Licensed Steel Car | Zahradnictví u Juliuse',
      description: 'Quasi autem dolorem perferendis ab perferendis.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Generic Metal Bacon',
    slug: 'Generic-Metal-Bacon',
    shortDesc:
      'Corrupti sed minima amet distinctio voluptatem dolorem dolorum.',
    description:
      'Suscipit est quam a eius. Vitae facere repellendus voluptatem possimus consequuntur reprehenderit optio laboriosam id. Sint vel repellat ea aut et in omnis id.\n \rDicta qui voluptatum perspiciatis dolor perspiciatis repudiandae debitis. Ut repellendus corrupti quia doloremque quas et est voluptatibus molestiae. A sunt aliquid voluptas ea et. Qui autem animi at quisquam.\n \rEa quod architecto sed perspiciatis. Doloremque qui architecto mollitia. Sit rerum necessitatibus tenetur occaecati cum aperiam.\n \rSapiente ipsa nemo sequi eius consequatur ducimus. Maiores quia et. Reiciendis esse tempora ut voluptates aspernatur quam molestias quo autem. Qui omnis et nostrum.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 559,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 65 },
    seo: {
      title: 'Generic Metal Bacon | Zahradnictví u Juliuse',
      description:
        'Corrupti sed minima amet distinctio voluptatem dolorem dolorum.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Soft Towels',
    slug: 'Practical-Soft-Towels',
    shortDesc: 'Qui rerum ut provident suscipit.',
    description:
      'Quae dolores adipisci. Molestias sint velit voluptatem modi. Earum nisi consequatur. Et possimus et.\n \rEa explicabo aut quibusdam est. Possimus quas vel. Cumque reprehenderit quisquam fugiat sequi. Sunt illum corporis voluptas perspiciatis eum est.\n \rA repellendus nam deleniti recusandae id aspernatur quia sed qui. Consequatur ratione et enim quisquam iste. Qui libero est inventore perferendis saepe. Et facere porro aut aut dolor et. Facere quis repellendus minus dolores officia in. Enim laboriosam illo maxime mollitia vero perferendis.\n \rMolestias ut quia consequatur sit magnam ipsam aut. Aspernatur ad quaerat et pariatur eum velit qui. Quidem excepturi sit impedit. Quam in laborum sint omnis explicabo quasi enim.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 359,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 16 },
    seo: {
      title: 'Practical Soft Towels | Zahradnictví u Juliuse',
      description: 'Qui rerum ut provident suscipit.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Rustic Concrete Sausages',
    slug: 'Rustic-Concrete-Sausages',
    shortDesc: 'Ut in maxime omnis voluptatem cupiditate officiis dolores.',
    description:
      'Quia officia voluptatum sed sit. Totam consectetur voluptate fuga et. Odit aliquid praesentium tempore exercitationem sed voluptatem. Quis velit deleniti. Saepe suscipit commodi nisi qui fugiat omnis. Eum qui cupiditate magnam vero natus.\n \rEa qui qui est fugiat reprehenderit. Sed distinctio consequatur veritatis vel et. In vitae adipisci velit velit. Corporis quo repellat quo natus rerum ut unde.\n \rLaborum earum esse veniam suscipit. Veritatis rem dolores architecto quisquam sint qui pariatur tenetur fuga. Molestias pariatur iusto quis. Architecto consequatur modi iure consequatur maiores natus id quia. Illum ipsa consequatur.\n \rRem error quia et. Deserunt sint aspernatur delectus eum et vel quod. Iure est non reprehenderit. Possimus aperiam ipsum velit odio dolor et nesciunt voluptatem totam.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 469,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 69 },
    seo: {
      title: 'Rustic Concrete Sausages | Zahradnictví u Juliuse',
      description: 'Ut in maxime omnis voluptatem cupiditate officiis dolores.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Soft Sausages',
    slug: 'Sleek-Soft-Sausages',
    shortDesc: 'Velit nulla quia rerum doloremque id.',
    description:
      'Et molestiae magnam nemo ea necessitatibus omnis aliquid ipsum. Amet perferendis omnis ipsa velit voluptas. Aut non animi tempora aliquam officiis est aut et explicabo. In dolores voluptatem alias voluptas.\n \rAdipisci voluptatibus vitae in. Modi et voluptas iusto et. Voluptate est sed vel id repellat facilis. In aperiam animi ad amet molestiae voluptatem distinctio maxime. Omnis accusamus enim officiis commodi sint.\n \rQuo quis blanditiis est voluptas. Placeat iste molestias provident porro sint ut a eos libero. Consequatur consectetur ut ab ut quo et ratione consequuntur. Eum eos id ratione consequatur. Corporis porro quod omnis facere temporibus perferendis rerum aperiam molestias.\n \rDolor ut enim aut est blanditiis deserunt sequi incidunt. Sit est ut natus. Dolorum qui quaerat omnis enim.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 129,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 13 },
    seo: {
      title: 'Sleek Soft Sausages | Zahradnictví u Juliuse',
      description: 'Velit nulla quia rerum doloremque id.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Incredible Soft Sausages',
    slug: 'Incredible-Soft-Sausages',
    shortDesc: 'Est atque rerum officia rerum sed.',
    description:
      'Occaecati est nulla impedit sint asperiores dignissimos repellat. Aut eum ut doloremque dolorem. Et quae explicabo quia iusto quis iusto corporis exercitationem aliquid. Voluptatem similique officia blanditiis eligendi. Neque quia ad sit quod. Autem sint explicabo minima.\n \rInventore natus veritatis tempora est molestiae eveniet iure saepe. Veniam adipisci rerum commodi dolor laudantium nemo ipsam harum ut. Et fuga aut quisquam. Recusandae maiores eius accusamus accusantium quia sunt eveniet autem. Ipsa tenetur incidunt aspernatur commodi.\n \rEarum magni eum nisi reprehenderit eos ipsam nam. Quo voluptas est. Qui perferendis a autem voluptas voluptates in deleniti ducimus. Magnam aut numquam qui maiores sint. Quos consequatur corporis soluta et. Et in facere numquam voluptas voluptas alias dicta.\n \rAsperiores eaque reiciendis similique fugit dolore perferendis ex. Accusantium eos perferendis est soluta incidunt deserunt modi. Error earum quia et est ea officia voluptas. Rerum ratione enim praesentium iusto quis delectus facere. Ad et dolores qui.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 159,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 53 },
    seo: {
      title: 'Incredible Soft Sausages | Zahradnictví u Juliuse',
      description: 'Est atque rerum officia rerum sed.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Refined Soft Mouse',
    slug: 'Refined-Soft-Mouse',
    shortDesc: 'Nihil sit et autem nulla eum alias.',
    description:
      'Possimus cum asperiores. Culpa dolorem cum optio libero consequuntur unde ipsa et. Architecto ducimus aut id ut repellat itaque error eos ipsum.\n \rSed qui aliquam voluptate aliquid sit deserunt veritatis et. Vero perferendis nulla hic at id aut debitis in officiis. Maiores corrupti quasi ipsam et ipsum. Neque id nisi deserunt et non atque porro. Omnis enim ut veritatis laudantium.\n \rLaboriosam rerum vero maxime suscipit repellat modi. Saepe eius aperiam animi similique omnis. Iusto magni cumque enim asperiores qui sit ea. Illo nisi omnis voluptatibus minus possimus officiis. Nemo eum similique numquam quod rem autem earum at.\n \rRerum consequatur assumenda suscipit repudiandae voluptatibus. Voluptatem amet nihil eius dolorem accusantium. Tempore provident voluptas. Quaerat blanditiis vero saepe earum molestiae est dolore molestias. Perspiciatis ipsam quis nostrum. Ad hic suscipit placeat omnis laborum adipisci incidunt quo.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 6 },
    seo: {
      title: 'Refined Soft Mouse | Zahradnictví u Juliuse',
      description: 'Nihil sit et autem nulla eum alias.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Licensed Wooden Chips',
    slug: 'Licensed-Wooden-Chips',
    shortDesc: 'Ratione odio quasi.',
    description:
      'Omnis modi illum exercitationem tempora voluptatem dolore non sint. Exercitationem excepturi id libero explicabo. Quam ipsum modi magni. Est molestias voluptas porro et.\n \rEst nisi quas recusandae dignissimos esse. Sunt nesciunt libero omnis id dolorem. Saepe et quos in. Enim quo ut.\n \rAt ut mollitia nulla ducimus velit sapiente accusamus et. Sunt aut occaecati quibusdam consequatur ex sit. Iusto qui consequatur omnis atque suscipit. Error iste est sed dolor inventore nesciunt quod dolor voluptatem. Earum quidem laborum voluptatem perferendis et. At qui minima numquam rerum expedita iusto.\n \rAt sint nihil quos assumenda natus numquam. Beatae optio excepturi odit quo aut aut ut consequatur. Quia consequuntur doloremque assumenda qui omnis voluptatem commodi voluptatem nesciunt. Rerum quia voluptatem iusto dolor similique minima rerum dolore in.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 369,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 61 },
    seo: {
      title: 'Licensed Wooden Chips | Zahradnictví u Juliuse',
      description: 'Ratione odio quasi.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Licensed Frozen Shirt',
    slug: 'Licensed-Frozen-Shirt',
    shortDesc: 'Reiciendis maxime nihil a eos magnam.',
    description:
      'Sed eius eius ipsa et consequatur iure odit. Qui nemo exercitationem velit voluptatibus officia dignissimos distinctio ea consequatur. Nihil rerum vel est in et placeat. Sint culpa nam dolores tempore. Unde laboriosam veritatis. Maxime non autem iusto eum non eos alias.\n \rSunt ea voluptas necessitatibus itaque rerum harum beatae. Temporibus est suscipit corrupti voluptatum corporis omnis nemo molestias. Et sit esse repellat est iste omnis.\n \rLaborum nobis aut nam labore. Repellat ipsa quisquam ipsum. Dolorem vel dolorum saepe. Iste placeat rerum. Eius eos accusantium ut molestiae suscipit nam. Tenetur quisquam dolor adipisci et illo in neque.\n \rAssumenda et quasi cupiditate nobis amet provident nam aut. Ratione perspiciatis aspernatur saepe sequi. Voluptatibus assumenda facilis ut aliquid alias fugit repellendus. Ullam et odit quisquam.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 429,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 19 },
    seo: {
      title: 'Licensed Frozen Shirt | Zahradnictví u Juliuse',
      description: 'Reiciendis maxime nihil a eos magnam.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Fresh Fish',
    slug: 'Practical-Fresh-Fish',
    shortDesc: 'Consequatur quasi atque molestiae quasi temporibus.',
    description:
      'Asperiores ducimus iste autem provident id. Magni eum harum iure nobis porro sed. Nisi minus voluptatum enim ex voluptatem. Ipsa rem est in aut at.\n \rOmnis ut vel architecto architecto iure. Reprehenderit non molestiae voluptate at quia ipsum laudantium. Et sed aliquid beatae molestias et voluptatibus consequuntur a.\n \rProvident dolorem ipsa sit nostrum amet quaerat fugit iusto nesciunt. Et dolores tempora voluptatem consequatur quis. Qui nobis atque consequuntur nam. Et nulla dolorum sint aut nobis ut maxime repudiandae. Expedita blanditiis quia eos.\n \rAdipisci esse esse est nihil quia ipsum corrupti et. Eos consequatur unde vero tempora laboriosam alias est neque. Doloribus explicabo tempora nesciunt ad est. Eos aut labore repudiandae est commodi veritatis sed. Natus molestias ut nemo sint deserunt dolore placeat eaque. Sapiente vel excepturi dolorem aut.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 239,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Practical Fresh Fish | Zahradnictví u Juliuse',
      description: 'Consequatur quasi atque molestiae quasi temporibus.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Fantastic Concrete Gloves',
    slug: 'Fantastic-Concrete-Gloves',
    shortDesc: 'Eius ducimus ipsum vero.',
    description:
      'Est architecto ex iusto. Sapiente et beatae quo aut tempore magni dignissimos eveniet dolores. Voluptatem eum in voluptas corrupti ut voluptate adipisci.\n \rEligendi voluptas rem quo aut molestiae eum. Dolor velit quidem architecto quo soluta vero nobis nisi commodi. Rerum error qui ipsam illum et perspiciatis veritatis quasi. Similique nulla nam non velit temporibus voluptas ut voluptate laudantium. Explicabo enim provident nemo impedit sit.\n \rSit nostrum excepturi aperiam ab qui minima eius. Rerum delectus quia et et tempore non. Qui asperiores cupiditate et nesciunt in. Ducimus pariatur sed laudantium iure alias corporis eligendi nam in. Similique molestiae ut eos. Quia aut et et et repudiandae et accusamus non.\n \rVoluptas harum cumque aut maxime vel blanditiis quasi tenetur est. Quis cumque ut perspiciatis quis. Et recusandae voluptas. Aspernatur voluptate qui perferendis enim et maxime quo quia. Doloremque adipisci molestias et et exercitationem sit rerum. Omnis quod incidunt veritatis quo quia.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 189,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 34 },
    seo: {
      title: 'Fantastic Concrete Gloves | Zahradnictví u Juliuse',
      description: 'Eius ducimus ipsum vero.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Frozen Towels',
    slug: 'Incredible-Frozen-Towels',
    shortDesc: 'Molestiae quasi suscipit.',
    description:
      'Autem architecto commodi dolorum possimus explicabo consectetur voluptatem aut. Quia ratione temporibus ipsam molestias et reiciendis. Libero totam minima velit dolorum possimus eius assumenda. Debitis quia ut. Totam enim vel reprehenderit. Et totam tempora saepe aut culpa.\n \rEt qui eaque qui dolores veritatis labore. Voluptatem aut itaque quidem dolor nulla. Ut adipisci quaerat error nostrum perferendis voluptas fugit. Optio voluptatem esse doloremque distinctio et.\n \rQui veritatis quasi. Rem dolorem et qui esse non tempora fugit. Voluptatem officia illum impedit suscipit dolorum et.\n \rDolor quos delectus. Error nam itaque eligendi temporibus. Quibusdam quidem porro eos voluptate omnis sequi dolores et in. Eos voluptatem rerum hic et et exercitationem aut ipsum in. Ad commodi atque quae ipsum aut. Autem quis ut nihil.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 349,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 40 },
    seo: {
      title: 'Incredible Frozen Towels | Zahradnictví u Juliuse',
      description: 'Molestiae quasi suscipit.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Refined Concrete Fish',
    slug: 'Refined-Concrete-Fish',
    shortDesc:
      'Itaque consequuntur voluptatum et temporibus repellendus error tempore.',
    description:
      'Et id sed optio totam aut qui quia vitae. Aut officiis amet. Tempore nesciunt enim ea debitis et aliquam explicabo quia saepe.\n \rConsequatur at eligendi fugiat. Illum expedita magnam omnis impedit dolorem sunt corporis. Labore dolores incidunt voluptates facere et ea quia ad ut. Molestias veniam sed hic cum voluptas id aut voluptatem earum. Animi et quibusdam aliquam quod.\n \rQuod tenetur ut nobis beatae. Necessitatibus quas suscipit aut libero voluptatem aspernatur sequi. Quaerat quod sequi. Et dolore qui et unde mollitia.\n \rVoluptas et omnis. Aut fugiat quasi. Aspernatur consequatur quasi ab voluptas.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Refined Concrete Fish | Zahradnictví u Juliuse',
      description:
        'Itaque consequuntur voluptatum et temporibus repellendus error tempore.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Practical Soft Shoes',
    slug: 'Practical-Soft-Shoes',
    shortDesc: 'Sequi quis saepe velit quo nemo.',
    description:
      'Et rerum assumenda qui rerum sit aut numquam. Ipsam mollitia quo voluptatem itaque laborum voluptas. Dolores aliquam error quos amet. Consequatur eum in. Voluptatum vel ipsa pariatur nostrum et officia voluptatem. Praesentium nemo veniam fugiat dignissimos odit eos error.\n \rVoluptas facilis consequuntur quas voluptatem. Voluptas accusantium et voluptatibus autem est. Et optio sint nihil voluptate. Nemo aut blanditiis dolorem delectus et incidunt doloribus. Ut corporis sequi recusandae corporis.\n \rOccaecati maiores rerum porro modi vel quas repudiandae iusto. Autem placeat alias hic consectetur. Vel facilis voluptates est amet modi accusamus optio. Cupiditate et dolorum sunt inventore qui nobis. Soluta pariatur nobis officiis deleniti cumque atque nihil dolorem.\n \rAut exercitationem qui deleniti. Voluptas ut nihil animi sequi optio eaque sed aut. Laudantium magnam atque recusandae molestiae omnis nesciunt.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 299,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 55 },
    seo: {
      title: 'Practical Soft Shoes | Zahradnictví u Juliuse',
      description: 'Sequi quis saepe velit quo nemo.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Incredible Steel Fish',
    slug: 'Incredible-Steel-Fish',
    shortDesc: 'Non aliquid sit est numquam impedit.',
    description:
      'Repudiandae laboriosam earum qui a expedita ipsa reiciendis quia. Sed veritatis reprehenderit et. Aut suscipit earum. Labore quis omnis perferendis non.\n \rTotam quia nulla eum ea. Pariatur fugiat voluptatem. Adipisci aspernatur ut est. Unde perspiciatis assumenda. Et ut sapiente aut non quibusdam in architecto unde delectus. Itaque voluptatem laudantium exercitationem laudantium sapiente atque quae quo.\n \rMolestias vero magnam expedita ut nulla molestiae. Vel molestiae incidunt asperiores voluptas illo neque ratione hic. Consectetur aut odit. Aspernatur provident velit sed et vel aut. Vel a id.\n \rRerum corporis laborum fuga iure ex facere voluptas et. Labore earum nesciunt minus. Autem quia molestias eum. Aut accusantium consequuntur dolores dolor molestiae incidunt.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 349,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 61 },
    seo: {
      title: 'Incredible Steel Fish | Zahradnictví u Juliuse',
      description: 'Non aliquid sit est numquam impedit.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Intelligent Fresh Car',
    slug: 'Intelligent-Fresh-Car',
    shortDesc: 'Quas perferendis ab ut.',
    description:
      'Libero culpa provident hic blanditiis alias. Quas ad sunt. Saepe voluptatem et nulla et.\n \rNon quia mollitia autem consequatur earum ad possimus qui enim. Molestiae sed aut cumque dolorem. Delectus provident aut quisquam necessitatibus blanditiis dolores quisquam.\n \rFacere neque molestias. Iste et corporis quia. Ratione nemo veritatis qui ut distinctio et occaecati eaque. Numquam illo quia vitae architecto in laborum amet quo molestiae.\n \rSed enim officiis veniam dignissimos sit voluptatem sapiente. Non ipsa sunt consectetur. Vel magnam veniam est. Adipisci vel necessitatibus numquam commodi officia minus. Et sit doloribus quibusdam qui. Dolores dignissimos dicta perferendis.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 26 },
    seo: {
      title: 'Intelligent Fresh Car | Zahradnictví u Juliuse',
      description: 'Quas perferendis ab ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Cotton Chicken',
    slug: 'Gorgeous-Cotton-Chicken',
    shortDesc: 'Adipisci voluptatem et qui qui impedit.',
    description:
      'Ex corrupti et quo excepturi voluptas iste. Quae quis sapiente. Sit qui rem molestias et quidem esse veniam at.\n \rUnde id soluta ipsam nemo minima aperiam placeat. Ut excepturi voluptates et veniam aperiam quo. Laborum ut aut debitis et. Quos consectetur porro officiis dolores et ab est. Vel modi rem id.\n \rConsequatur fugit ea praesentium aut. Eum minima ea repellat qui sit. Sed id nisi dignissimos aut eius et voluptates vel error. Distinctio et qui officiis est voluptas et autem. Dignissimos quis aut.\n \rQuibusdam dicta magni atque quo. Tenetur perspiciatis rem molestiae quod repudiandae occaecati vero perferendis quia. Temporibus dolores nihil est ea ipsum qui expedita sunt consequatur. Accusamus perspiciatis mollitia id sunt aliquam qui. Et praesentium sed harum voluptatem occaecati nemo quasi non.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Gorgeous Cotton Chicken | Zahradnictví u Juliuse',
      description: 'Adipisci voluptatem et qui qui impedit.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Tasty Granite Ball',
    slug: 'Tasty-Granite-Ball',
    shortDesc: 'Qui deleniti voluptas reprehenderit dolor quisquam.',
    description:
      'Quia nihil dolores. Et autem consequatur. Eaque vel neque velit voluptatum dolorum non et consequatur consectetur. Amet numquam optio. Voluptatibus rerum necessitatibus natus occaecati maiores sapiente et rem id.\n \rAut et quia illum sapiente sed. Mollitia magnam ipsam ducimus praesentium asperiores cumque. Sed aperiam quidem alias aliquam. Cupiditate perspiciatis dolores aperiam harum pariatur.\n \rOccaecati assumenda aut et sunt quia. Quos cumque et dolore esse optio deserunt. Incidunt harum ab ducimus quam distinctio aspernatur sed nemo fugiat. Ut tempora repellat voluptatem impedit eius in. Iusto esse neque enim saepe dolorem nesciunt.\n \rVel dignissimos recusandae vel officia et aut quas corrupti quidem. Et voluptatem consequuntur eum quos consequatur in et. Nulla ad amet aut quo molestiae sapiente sequi sequi sint.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 13 },
    seo: {
      title: 'Tasty Granite Ball | Zahradnictví u Juliuse',
      description: 'Qui deleniti voluptas reprehenderit dolor quisquam.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Small Soft Hat',
    slug: 'Small-Soft-Hat',
    shortDesc:
      'Sit minima quia fugit veritatis repellendus quo saepe mollitia eos.',
    description:
      'Corporis porro doloribus qui. Et iste qui tenetur. Facere rem sit in reiciendis sunt qui. Aliquam nobis at ad distinctio hic rerum. Voluptas harum accusamus architecto quo quidem.\n \rItaque nihil dolore non ut excepturi esse nulla nulla. Molestiae adipisci id aut. Laborum illum porro.\n \rMolestiae sed ut sed dolorem consequatur nulla qui voluptate fuga. Voluptas vero aut at est in eaque nemo. Iure veritatis et voluptatem quia velit. Optio eum qui totam provident.\n \rAt adipisci placeat similique quod ut quidem vitae rerum quibusdam. Commodi in eaque perspiciatis nisi incidunt. Nulla autem officia eum.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 399,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 80 },
    seo: {
      title: 'Small Soft Hat | Zahradnictví u Juliuse',
      description:
        'Sit minima quia fugit veritatis repellendus quo saepe mollitia eos.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Tasty Frozen Cheese',
    slug: 'Tasty-Frozen-Cheese',
    shortDesc: 'Dolorem repudiandae et voluptate voluptas alias impedit.',
    description:
      'Hic sint ad quo. Est ut et est molestiae tempora. Debitis nesciunt unde quisquam doloremque eum. Consequatur architecto soluta in minima est asperiores.\n \rAccusantium nisi sint aut aut qui nihil at. Eligendi ut possimus. Similique laboriosam doloremque eum ut animi atque et.\n \rEaque cum quod sapiente cum. Ex qui sit rerum ipsa sed. Quidem illum explicabo velit.\n \rAtque repellat tempora tempora. Quia optio neque architecto similique rerum delectus perspiciatis. Non reprehenderit voluptatum est reiciendis perferendis iusto necessitatibus quod. Accusantium sit amet sed quasi. Cum itaque consectetur consequuntur qui magnam eius nulla facere maiores. Qui vitae et voluptatem.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 19,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 3 },
    seo: {
      title: 'Tasty Frozen Cheese | Zahradnictví u Juliuse',
      description: 'Dolorem repudiandae et voluptate voluptas alias impedit.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handmade Rubber Chicken',
    slug: 'Handmade-Rubber-Chicken',
    shortDesc:
      'Voluptas id cumque et repellendus quasi qui consequatur maiores.',
    description:
      'Hic recusandae sint autem voluptatem expedita ut soluta cumque. Distinctio soluta explicabo excepturi iusto voluptatibus voluptatem delectus quidem nihil. Enim aut eaque quia earum non omnis. Quam sed sit voluptas. Expedita non illum repudiandae minima debitis ipsum culpa accusantium. Non pariatur molestias mollitia officia consequuntur sed.\n \rEa dolor inventore quia consequatur facere. Magni cupiditate quidem consequatur odit id quis aut in. Recusandae sunt sit qui ut nemo.\n \rIpsam soluta qui vitae veniam non. Nostrum et praesentium vel at qui molestiae inventore est nihil. Dicta nostrum a laborum. Placeat doloribus qui debitis error quas.\n \rAccusamus tenetur numquam magni laudantium alias saepe. Rerum vel sed praesentium at sit. Impedit voluptatum qui suscipit consequuntur architecto. Officia omnis facere magni et provident. Ducimus cum magnam qui velit soluta saepe nesciunt.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 12 },
    seo: {
      title: 'Handmade Rubber Chicken | Zahradnictví u Juliuse',
      description:
        'Voluptas id cumque et repellendus quasi qui consequatur maiores.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Handcrafted Rubber Computer',
    slug: 'Handcrafted-Rubber-Computer',
    shortDesc:
      'Velit sunt iste repellendus expedita laboriosam optio delectus.',
    description:
      'Reiciendis incidunt occaecati harum modi. Animi doloremque numquam. Et qui maiores expedita deserunt perferendis accusamus pariatur.\n \rAssumenda animi voluptate sunt ut commodi consectetur itaque earum ut. Maxime sunt dolorem odit nobis nesciunt veniam. Quisquam velit atque. Et consequatur dicta enim possimus. Nesciunt odit impedit qui et at est et eaque.\n \rQuas reiciendis dolore saepe. Asperiores nihil eveniet amet quos velit quis veritatis. Ratione sapiente dolorem non. Ullam voluptatem veniam.\n \rQuia et error veniam sed praesentium quisquam. Tempore voluptatem eum itaque mollitia. Repudiandae qui earum. Assumenda molestias ea odio at alias qui et.',
    category: {
      name: 'Trvalky',
      slug: 'trvalky',
      background: 'https://api-dp-eshop.web.app/images/cat/trvalky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    price: 299,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 63 },
    seo: {
      title: 'Handcrafted Rubber Computer | Zahradnictví u Juliuse',
      description:
        'Velit sunt iste repellendus expedita laboriosam optio delectus.',
      image:
        'https://api-dp-eshop.web.app/images/products/trvalky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Small Plastic Cheese',
    slug: 'Small-Plastic-Cheese',
    shortDesc: 'Velit quidem in.',
    description:
      'Tempora nihil deleniti. Dolor et odit eveniet totam rem. Voluptas a accusamus. Quidem qui qui magni eaque ut vitae ad dicta dolores. Quisquam placeat dolorem et culpa et ad fugiat molestiae dolorem.\n \rReiciendis aliquid eos et aliquid. Aut quia dolor molestiae. Rerum nemo animi. Ducimus praesentium ullam cum et animi placeat sapiente saepe. Eius est eius blanditiis suscipit aut consequatur velit et maxime. Ea non aut nam.\n \rOccaecati consequatur voluptatum est autem dolores culpa. Quae nam numquam velit et est magnam corrupti amet et. A qui id magnam repudiandae. Aut architecto veritatis voluptate ab voluptatem in nemo quisquam adipisci. Quia perspiciatis sit soluta accusantium ut qui neque dolorem quo.\n \rIpsa laudantium natus ipsa reiciendis quis cumque qui. Rerum dolore vel itaque eum perspiciatis molestiae voluptas doloribus. Sequi blanditiis quas est libero sequi temporibus quas illo qui.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 99,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 19 },
    seo: {
      title: 'Small Plastic Cheese | Zahradnictví u Juliuse',
      description: 'Velit quidem in.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Licensed Concrete Shoes',
    slug: 'Licensed-Concrete-Shoes',
    shortDesc: 'In labore sed ex molestiae consequatur sint.',
    description:
      'Consequuntur nostrum qui esse numquam consequatur ut magnam. Deleniti rem amet quia in sunt illum placeat. Eaque quia eligendi sit officia autem. Ut amet voluptas sequi aut quas atque quo. Omnis facere accusantium officiis fuga eligendi autem voluptatum maiores. Modi saepe voluptas omnis esse ut sed.\n \rNostrum quia eaque tempora sequi voluptatum tenetur dolorum qui. Repellendus aut voluptatibus qui laudantium voluptatibus. Reiciendis sunt voluptas voluptas consequatur qui cum distinctio. Eaque excepturi aut sed sunt qui quis.\n \rVel et provident dignissimos libero ullam molestias aperiam aut recusandae. Molestiae nemo ipsam harum reprehenderit. Amet consequatur ea saepe. Aspernatur voluptatum accusamus omnis aut aspernatur. Quisquam ut soluta atque magni in totam qui. Ut illo et commodi eaque sed.\n \rQuisquam deserunt corrupti alias quis soluta cupiditate. Aut rerum eaque vero voluptate ipsum totam esse adipisci. Praesentium quam voluptas mollitia. Ea eum maxime ipsa quam tenetur sed exercitationem et voluptatum. Voluptate officiis fuga ipsum. Aut aut est doloribus sunt.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 95 },
    seo: {
      title: 'Licensed Concrete Shoes | Zahradnictví u Juliuse',
      description: 'In labore sed ex molestiae consequatur sint.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Refined Soft Mouse',
    slug: 'Refined-Soft-Mouse',
    shortDesc: 'In aut quia voluptatem mollitia eius autem.',
    description:
      'Accusamus et amet necessitatibus voluptas quis rerum aut cupiditate. Eveniet laborum est qui officiis. Dolores placeat quae id sunt repellendus. In reprehenderit aut autem occaecati placeat voluptates et.\n \rIure ea nesciunt autem. Possimus consequatur nisi aut ad soluta adipisci consequatur et. Dolore reiciendis consequuntur ab. Sed velit similique nisi libero.\n \rSint laboriosam alias deleniti nesciunt id officia. Porro atque magni possimus sint. Itaque saepe earum eum tenetur sunt natus.\n \rSed nulla labore est accusamus iste sunt deleniti. Reiciendis incidunt consequatur soluta cupiditate non nihil excepturi omnis eos. Neque aut qui nostrum.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 309,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 10 },
    seo: {
      title: 'Refined Soft Mouse | Zahradnictví u Juliuse',
      description: 'In aut quia voluptatem mollitia eius autem.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Fantastic Soft Pizza',
    slug: 'Fantastic-Soft-Pizza',
    shortDesc: 'Magnam nihil consectetur non quia a aut velit voluptatem ut.',
    description:
      'Dolor voluptas ut id vero alias animi repellat rerum dolor. Nihil incidunt sunt laudantium et aliquid. Maiores excepturi enim maiores voluptates soluta voluptates et quae. Sit rerum voluptatem ut a cupiditate dignissimos. Consequatur totam et officia nam officiis et eos nostrum aut.\n \rAnimi in omnis eum est eveniet molestiae. Qui delectus aut quam aut et quasi porro et. Commodi impedit ut sunt. Quae eum nisi quisquam tenetur. Nihil quia vero sapiente voluptatem sapiente pariatur.\n \rQuidem commodi dolorum itaque inventore rerum fugiat consectetur et culpa. Molestias tempore veniam nulla ut et amet sed. At quo sunt voluptatibus fuga incidunt. At libero architecto dolorem nesciunt ad.\n \rNeque iusto distinctio. Dolore est repudiandae enim alias impedit suscipit quo itaque sunt. Dolores est tempora. Voluptatibus autem blanditiis placeat recusandae praesentium voluptas et. Voluptatem facere dolor.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 39 },
    seo: {
      title: 'Fantastic Soft Pizza | Zahradnictví u Juliuse',
      description:
        'Magnam nihil consectetur non quia a aut velit voluptatem ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Rubber Mouse',
    slug: 'Practical-Rubber-Mouse',
    shortDesc: 'Voluptatem quas quia et aut iure.',
    description:
      'Eos minus non repellendus adipisci ut cumque repellendus omnis. Rem ut optio modi ex non distinctio mollitia. Et sunt ut consequatur dicta reiciendis quisquam consequatur. Sequi dolore et odio quidem odit dolor possimus neque. Et odio quis illum fuga aut vitae debitis vel. Adipisci distinctio maiores nihil est libero.\n \rLibero quaerat delectus vel et non rerum commodi. Pariatur saepe praesentium et. Est aut consectetur recusandae voluptatum quas commodi.\n \rDicta ullam asperiores. Veniam et est voluptatem optio sunt eos. Dignissimos quam molestias consequatur. Pariatur fugit molestiae. Impedit porro totam ut similique. Nemo nulla libero maxime mollitia consectetur et rem deleniti.\n \rPraesentium maiores ullam. Dolor eligendi rerum. Porro sed veniam aliquam a quo est quod quis.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 299,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 35 },
    seo: {
      title: 'Practical Rubber Mouse | Zahradnictví u Juliuse',
      description: 'Voluptatem quas quia et aut iure.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Small Granite Car',
    slug: 'Small-Granite-Car',
    shortDesc: 'Velit hic cumque maxime corrupti at aliquid.',
    description:
      'Repellat perspiciatis omnis explicabo molestias. Id impedit voluptatum exercitationem qui officiis tempora. Porro rerum repudiandae cumque dignissimos. Consectetur qui pariatur vel odio architecto quo. Minima fuga eaque.\n \rEt accusamus eos beatae doloribus qui placeat et itaque dolores. Velit velit et et itaque. Voluptas ut cupiditate rerum.\n \rImpedit sed vel qui exercitationem. Ut neque qui eaque est maxime eos ea. Ex magnam sed voluptate.\n \rBeatae odit enim qui iure. Est ea illo rerum accusamus. Recusandae rerum harum voluptatum nostrum perspiciatis provident. Et voluptas commodi atque quibusdam.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 349,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 100 },
    seo: {
      title: 'Small Granite Car | Zahradnictví u Juliuse',
      description: 'Velit hic cumque maxime corrupti at aliquid.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Licensed Concrete Shirt',
    slug: 'Licensed-Concrete-Shirt',
    shortDesc: 'Quia eos incidunt ea inventore at.',
    description:
      'Harum vero autem dolorem consequatur voluptatem. Quisquam tenetur adipisci totam in porro consequatur veniam culpa dolores. Non iure ea beatae dolor. Quam quis commodi nihil voluptate cum dolor nobis nam. Qui temporibus dolor. Quas ut quia et consequatur necessitatibus incidunt.\n \rOmnis iure velit voluptatum voluptatem nihil. Aspernatur ut autem hic omnis ab pariatur sunt ab voluptate. Vel eum mollitia reprehenderit nemo maiores voluptatem et voluptatem. Perspiciatis consequatur in et quae.\n \rNihil saepe rerum eligendi. Adipisci est aut est voluptatum similique. Non similique nihil maiores corporis consequatur repellendus sed rerum. Quod qui ipsam dolores quas.\n \rRepudiandae qui sunt. Mollitia natus similique amet officiis et aut. Et iure est maxime optio architecto occaecati beatae. Iste velit fuga. Eos aut ad qui et sapiente id cumque repudiandae. Perspiciatis qui eligendi consectetur dolor ipsum nulla.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 359,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 4 },
    seo: {
      title: 'Licensed Concrete Shirt | Zahradnictví u Juliuse',
      description: 'Quia eos incidunt ea inventore at.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Rustic Concrete Fish',
    slug: 'Rustic-Concrete-Fish',
    shortDesc:
      'Neque sint corporis consectetur velit perferendis iure quis minus.',
    description:
      'Qui enim dolorum natus. Explicabo non esse eveniet minima minima dolorem et. Eaque harum voluptas ex neque vitae et odio. Reprehenderit ut eos aut dolores officia provident et.\n \rDucimus voluptatem inventore porro ut quia in et. Corporis ad consequuntur. Id veritatis veniam quaerat et corrupti qui similique tempore.\n \rEt porro voluptas quaerat. Enim autem aut occaecati. Sunt in nemo perspiciatis omnis.\n \rAut doloremque delectus nemo tempora tempora fugit nobis nesciunt voluptatum. Nulla officiis odio nostrum. Qui est vero quia sapiente eaque et deleniti eligendi. Assumenda eum ea aut fuga incidunt. Amet inventore laboriosam et in tempore eum occaecati mollitia.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 49,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 46 },
    seo: {
      title: 'Rustic Concrete Fish | Zahradnictví u Juliuse',
      description:
        'Neque sint corporis consectetur velit perferendis iure quis minus.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Small Steel Bike',
    slug: 'Small-Steel-Bike',
    shortDesc:
      'Ea quisquam consequatur qui natus nihil voluptatem est tempore.',
    description:
      'Expedita distinctio quod quod. Aut ipsam quia rerum suscipit exercitationem et magnam quis. Consectetur voluptatum quo quis id excepturi. Porro occaecati nam voluptatibus sint dolores.\n \rAsperiores iure odit recusandae voluptates dignissimos ut aut ut quo. Quidem totam doloribus enim deserunt cupiditate cum dolores aliquam. Eaque consequatur quasi corporis. Quam consequuntur porro. Recusandae dolores eius ut sunt ut esse ut tempore et.\n \rLaborum aliquid facilis non sed enim placeat quidem et. Sunt quas nam repellat officia molestiae qui minus quia quaerat. Similique temporibus soluta perferendis esse debitis fugiat nisi dolor et. Placeat ut et assumenda iusto molestiae. Repudiandae aut velit tempore.\n \rEa quisquam cumque quas perspiciatis quia voluptatum. Odio qui est et sed voluptatem minima ut rerum. Expedita magnam eos cumque aperiam nam facere ut et. Omnis enim natus ut. Ab aut soluta corrupti porro incidunt sequi dolores debitis.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 18 },
    seo: {
      title: 'Small Steel Bike | Zahradnictví u Juliuse',
      description:
        'Ea quisquam consequatur qui natus nihil voluptatem est tempore.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Licensed Granite Mouse',
    slug: 'Licensed-Granite-Mouse',
    shortDesc: 'Non eveniet commodi ut id et.',
    description:
      'Dolorem ut dignissimos aperiam neque assumenda enim laboriosam. Quia cumque assumenda suscipit saepe sed enim. Mollitia consequatur assumenda rerum sunt praesentium vero quis. In assumenda unde. Facere et voluptatem est qui illo tenetur magni quam aut. Odio exercitationem nihil sit sunt et minus eveniet veritatis.\n \rSapiente aut vero aut veritatis ad delectus. In ea accusamus ullam qui in molestiae. Eius ut minus vel facilis dicta.\n \rDoloremque et pariatur. Quis est ut autem. Quae est dolores in doloribus minima nesciunt ut sint. Sed eum assumenda voluptas deleniti ipsum odio deleniti. Incidunt ad nesciunt.\n \rAliquid ea animi incidunt ut dolorem sunt. Quod cupiditate natus voluptatibus odio quos est laudantium autem. Ex ut eveniet ut quis omnis error sequi cupiditate. Molestias dignissimos quia harum facilis aspernatur. Nihil qui explicabo.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 89 },
    seo: {
      title: 'Licensed Granite Mouse | Zahradnictví u Juliuse',
      description: 'Non eveniet commodi ut id et.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Tasty Soft Bike',
    slug: 'Tasty-Soft-Bike',
    shortDesc: 'Quas aut et.',
    description:
      'Sequi provident atque. Dicta laboriosam ut reiciendis facere. Nihil vitae mollitia non temporibus ullam. Dolorum ad ut omnis adipisci. Doloribus sint sunt est omnis qui ut. Est quasi assumenda voluptatem ut ullam asperiores eos.\n \rUt eveniet et aut. Illo est aliquid dolorum optio ratione consequatur. Aut est aliquid. Esse est ut debitis quaerat nisi perferendis consequatur praesentium vel. Nisi voluptatum quaerat distinctio.\n \rSaepe tempora consequatur vero tenetur et nesciunt eveniet aliquam voluptates. Officiis sapiente sit ea possimus. Unde consectetur perspiciatis quam. Minima excepturi et.\n \rMaxime id reiciendis quasi eos et labore. Modi officia saepe quia error aliquid vel perspiciatis aliquam laudantium. Ut eius iste iusto non autem quis similique in fugit. Doloribus quaerat cumque et laboriosam nam tempora ducimus vel nemo. Voluptas nemo officia.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 489,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 16 },
    seo: {
      title: 'Tasty Soft Bike | Zahradnictví u Juliuse',
      description: 'Quas aut et.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Practical Soft Bacon',
    slug: 'Practical-Soft-Bacon',
    shortDesc:
      'Voluptas quia qui dolorem cupiditate laboriosam qui non ut dolorem.',
    description:
      'Velit odio voluptas exercitationem earum doloremque. Modi dolorum et dolores amet aliquid laborum id et. Ducimus rem in hic qui provident nam non.\n \rUt animi voluptatem perferendis quaerat. Eos nisi nulla ea id optio saepe asperiores. Voluptates dolores sed.\n \rEx id in quia qui. Aliquam occaecati adipisci ut voluptatem atque. Impedit voluptates laborum. Deserunt soluta voluptas provident adipisci debitis sed harum aut harum.\n \rImpedit magni blanditiis iste voluptas possimus. Et non dolorum sequi optio dolorem animi nihil. Blanditiis accusantium aut quis vero ipsam magni veritatis sint labore. Qui cupiditate velit quam deserunt sit dolorem accusamus corrupti. Distinctio omnis rerum suscipit earum qui iste eum doloremque sapiente. Eos nihil quae et nemo aut eum quidem soluta quas.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 449,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 28 },
    seo: {
      title: 'Practical Soft Bacon | Zahradnictví u Juliuse',
      description:
        'Voluptas quia qui dolorem cupiditate laboriosam qui non ut dolorem.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Ergonomic Plastic Sausages',
    slug: 'Ergonomic-Plastic-Sausages',
    shortDesc: 'Sed molestias officiis fuga tempore velit nisi sit nisi.',
    description:
      'Omnis molestiae qui quia nihil ut. Nihil sit eos omnis eum perferendis quas. Explicabo perferendis id fugiat cupiditate velit. Consequatur dolores consequuntur impedit aut.\n \rMollitia dicta architecto aliquid velit facilis quia quasi fugit. Possimus numquam deleniti nulla. Sint earum et aliquam qui distinctio unde. Ea voluptatem unde cupiditate corporis sed qui in accusamus. Corrupti quos molestiae voluptatibus et sit.\n \rQuae dolores sunt aspernatur laborum ullam voluptas qui non voluptatem. Enim culpa eum ducimus sit vel eum maxime. Unde dolorum adipisci eos enim deleniti nostrum mollitia voluptatem. Recusandae cum deleniti sunt pariatur quaerat quia magnam.\n \rIncidunt consequatur molestiae quis incidunt minima dignissimos est eius qui. Ab cum nam in nobis voluptatum. Voluptas sit iste nemo. Neque dolor pariatur sed quia facilis molestias. Sint doloremque perspiciatis corrupti maxime. Voluptatibus consequatur in voluptas.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 589,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 25 },
    seo: {
      title: 'Ergonomic Plastic Sausages | Zahradnictví u Juliuse',
      description: 'Sed molestias officiis fuga tempore velit nisi sit nisi.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Intelligent Granite Soap',
    slug: 'Intelligent-Granite-Soap',
    shortDesc: 'Est laborum ut.',
    description:
      'Nam facilis illo autem omnis fugiat quod consequuntur et ullam. Ut qui nihil expedita alias at autem ipsam excepturi nemo. Quidem fugit possimus non animi.\n \rOmnis inventore quam et molestiae ea neque esse iure. Et itaque nemo repellat. Eum non est veritatis. Quod et dolorem autem laudantium.\n \rSed reiciendis quis ut qui dolor totam. Sed consequatur ut quam. Non nihil quibusdam dolor perferendis dolorum exercitationem accusantium qui consequatur.\n \rUllam rerum quia. Consequatur ea et. Et in commodi optio impedit. Quia ipsam omnis beatae est ut enim odio ut rerum. Reiciendis consequatur sit quisquam ipsam accusamus excepturi omnis rerum soluta.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 73 },
    seo: {
      title: 'Intelligent Granite Soap | Zahradnictví u Juliuse',
      description: 'Est laborum ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Rustic Cotton Computer',
    slug: 'Rustic-Cotton-Computer',
    shortDesc: 'In est non soluta.',
    description:
      'Vel dolorem aperiam architecto sed quae aut. Rerum facilis neque iure cumque rerum id aut. Quis nihil nihil ipsa eius qui esse ducimus quod.\n \rOdit temporibus commodi autem incidunt nobis non aspernatur. Assumenda impedit sit. Eum consectetur et et consequatur.\n \rIpsa et sed. Non est corporis id et cum illum. Similique qui nisi corporis qui praesentium debitis magni voluptas nam. Maiores repellat ad ratione ea ipsum odio aliquam. Eum omnis dolores error.\n \rCupiditate quia hic animi consequatur provident reiciendis recusandae. Odio quo officiis quaerat ipsam enim amet. Iste expedita libero magnam.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 89,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 23 },
    seo: {
      title: 'Rustic Cotton Computer | Zahradnictví u Juliuse',
      description: 'In est non soluta.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Ergonomic Fresh Fish',
    slug: 'Ergonomic-Fresh-Fish',
    shortDesc: 'Sapiente quo porro eius numquam.',
    description:
      'Omnis ea pariatur est porro quidem dignissimos. Cupiditate ducimus molestiae velit officia. Dicta quos nobis sit.\n \rTempora eos et consequatur a et quia. Perferendis quis quas et doloremque. Deserunt incidunt ut ducimus dolore reprehenderit alias id nisi occaecati. Quo illo est architecto delectus iusto et itaque quod.\n \rNon sapiente eum dolores aut. Quia placeat molestias temporibus deleniti dolores. Et et ab ipsum optio illum. Nisi enim neque ut.\n \rCupiditate totam et. Adipisci nisi omnis alias aliquid. Necessitatibus minus impedit occaecati rerum iste.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 90 },
    seo: {
      title: 'Ergonomic Fresh Fish | Zahradnictví u Juliuse',
      description: 'Sapiente quo porro eius numquam.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Refined Frozen Shoes',
    slug: 'Refined-Frozen-Shoes',
    shortDesc: 'Quos eos eveniet quia molestiae enim facere doloribus.',
    description:
      'Omnis autem expedita non a officiis. Odio dolorem incidunt possimus ut. Eos laborum deserunt vel laudantium harum et nemo recusandae nam. Et quasi nemo maiores.\n \rQuidem officiis repudiandae facilis incidunt beatae eos eligendi. Minus qui ut qui repellendus quia sed delectus neque. Neque dolor corrupti. Tenetur amet ad incidunt beatae id voluptatem. Et culpa non voluptas excepturi.\n \rModi ea magnam quo deserunt. Fugit earum ipsam. Est dolorem possimus dignissimos debitis deleniti. Voluptas et soluta quia quia reprehenderit repellat. Qui vitae modi earum non qui cupiditate.\n \rVitae aspernatur temporibus. Est tempora impedit dolor repudiandae culpa veniam facilis deserunt. Dolor est omnis dicta.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 569,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 64 },
    seo: {
      title: 'Refined Frozen Shoes | Zahradnictví u Juliuse',
      description: 'Quos eos eveniet quia molestiae enim facere doloribus.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Granite Table',
    slug: 'Practical-Granite-Table',
    shortDesc: 'Quis aut aspernatur sunt impedit est aspernatur.',
    description:
      'Dignissimos et et et qui ut rerum aut. Rem quia ab ullam tempore et porro aut. Nesciunt deserunt mollitia incidunt nihil fugiat optio est eos. Distinctio molestiae earum maxime. Est dolores officiis labore ut rerum accusantium possimus.\n \rRepudiandae autem accusamus consequatur sit nesciunt quisquam necessitatibus. Voluptatem accusamus qui libero et accusamus. Beatae exercitationem reprehenderit dolores mollitia et eos illo. Placeat quisquam libero et. Sint delectus sint voluptatum optio autem numquam.\n \rEum est minus eum. Eos sed voluptate tempora nostrum enim voluptas voluptatem sunt. Sunt et facilis numquam est harum quia sed. Sit aut reprehenderit. Sit soluta ullam quidem est omnis.\n \rNatus sed esse consequatur voluptatum. Ea exercitationem voluptates voluptate qui. Et et repudiandae quaerat dolor nihil non repellendus. Omnis maiores et non. Rem hic tempore laboriosam soluta quas nihil.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 559,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 89 },
    seo: {
      title: 'Practical Granite Table | Zahradnictví u Juliuse',
      description: 'Quis aut aspernatur sunt impedit est aspernatur.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Steel Pants',
    slug: 'Handcrafted-Steel-Pants',
    shortDesc: 'Aut consequuntur unde ut nihil.',
    description:
      'Cumque quia eius. Eum qui maxime debitis sed et. Ipsum ipsa minima dolorem quae eos voluptatibus voluptatem dolore consequuntur. Blanditiis dolorem quia sed nihil ea consequatur.\n \rIpsa quia dolorem qui. Neque necessitatibus voluptatibus illo ab voluptas doloribus mollitia iusto mollitia. Eos aut nihil aut. Qui enim repellendus vero et amet necessitatibus libero. Id velit laudantium commodi praesentium porro ipsa reiciendis ratione aperiam.\n \rHarum excepturi nisi sit impedit qui aut non reprehenderit aperiam. Esse id quam aperiam eum aut exercitationem ad rerum. At ut omnis iusto nesciunt et. Ex iusto quas debitis dolorem veniam est ipsam aperiam earum. Distinctio rem ratione atque.\n \rDoloremque unde consequuntur. Qui suscipit perferendis mollitia qui. Veritatis voluptatum pariatur quidem dolorem quo sint consectetur voluptatem libero. Laborum ab accusamus ut aut maiores beatae id nihil. Eum non nemo laborum est. Quibusdam qui eveniet iusto expedita corporis sed explicabo praesentium similique.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 99,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 10 },
    seo: {
      title: 'Handcrafted Steel Pants | Zahradnictví u Juliuse',
      description: 'Aut consequuntur unde ut nihil.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Ergonomic Rubber Chips',
    slug: 'Ergonomic-Rubber-Chips',
    shortDesc: 'Voluptate nesciunt ab.',
    description:
      'Provident velit ut reiciendis mollitia alias ad maiores. Expedita magnam cumque. Ut est sequi repellendus eaque qui officia assumenda. Culpa iste sint.\n \rQuia nobis dolorem placeat repellendus exercitationem quibusdam. Voluptate accusamus perferendis et odio et minus culpa. Id cum cumque voluptatum.\n \rAlias est dolor similique quia. Blanditiis et excepturi ipsa perferendis in debitis. Veritatis aut quia nulla accusantium. Vel neque et et. Quod repudiandae quisquam aut quaerat numquam et et.\n \rMolestias sed consectetur perferendis a voluptatem a voluptatem. Ab velit quod ullam minima enim corporis enim. Vel asperiores et necessitatibus veritatis voluptatum est. Laborum iste similique culpa consequatur molestiae consectetur eius. Odit rerum sint libero error ut eos sit.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 309,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 35 },
    seo: {
      title: 'Ergonomic Rubber Chips | Zahradnictví u Juliuse',
      description: 'Voluptate nesciunt ab.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Concrete Computer',
    slug: 'Incredible-Concrete-Computer',
    shortDesc: 'Voluptatibus nesciunt est cumque temporibus ducimus.',
    description:
      'Doloribus quas eum eius ut voluptatibus nisi unde sit soluta. Ab voluptatum veniam ea et nihil neque nulla corporis quis. Dolorem dolores autem quidem repudiandae vel non odit fugiat vel. Voluptatem iste explicabo beatae veniam est ullam quibusdam commodi at.\n \rDicta et nobis. Ab libero incidunt amet. Culpa temporibus veniam vel necessitatibus minima est et voluptate.\n \rAutem sed molestiae assumenda voluptas et maiores porro ut. Asperiores quam alias eius iure. Sed consequatur hic harum reiciendis eius. Inventore nesciunt sapiente sit in quasi occaecati labore voluptatem.\n \rQui odit fuga qui vel quibusdam blanditiis excepturi labore. Occaecati sed harum. Harum labore ut omnis impedit suscipit repellat. Magnam accusamus iusto officia labore vitae explicabo quis voluptates.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 39,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 99 },
    seo: {
      title: 'Incredible Concrete Computer | Zahradnictví u Juliuse',
      description: 'Voluptatibus nesciunt est cumque temporibus ducimus.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Rustic Concrete Table',
    slug: 'Rustic-Concrete-Table',
    shortDesc: 'Quia perspiciatis pariatur qui voluptates dicta.',
    description:
      'Laboriosam asperiores corporis modi. Eos provident et enim repellat odit praesentium nemo excepturi impedit. Harum consequuntur incidunt aliquid et ut molestiae necessitatibus culpa eos. Officiis aperiam itaque tenetur et. Esse et quidem qui et sed vel.\n \rEnim voluptates reprehenderit doloremque quasi eveniet temporibus vero sequi. Consequatur et ipsa debitis sint iusto aut qui dolor aut. Non asperiores deserunt quo animi aliquid saepe quia explicabo. Officiis aperiam occaecati aut eum nostrum. Et qui temporibus perferendis.\n \rAccusamus qui corrupti repellendus in et. Nihil id quaerat. Sit ut enim inventore fuga eaque expedita.\n \rConsequuntur incidunt reiciendis qui exercitationem. Repellendus et magnam et vitae possimus dolorum. Doloribus quam deleniti aut enim fuga ipsa amet quidem. Provident aspernatur in consequatur quia.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 259,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 11 },
    seo: {
      title: 'Rustic Concrete Table | Zahradnictví u Juliuse',
      description: 'Quia perspiciatis pariatur qui voluptates dicta.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Refined Fresh Hat',
    slug: 'Refined-Fresh-Hat',
    shortDesc: 'Ut laborum aut.',
    description:
      'Beatae qui provident aliquam nam maxime. Molestiae optio ab eos nobis ducimus repellat. Quia et necessitatibus aspernatur quia nesciunt aperiam voluptas aspernatur excepturi.\n \rFuga accusantium sapiente tempora praesentium voluptas repellat et ducimus. Nesciunt animi aliquid esse facere sit illum. Quam aspernatur est et nulla. Minima laudantium aliquam est at autem consectetur aperiam incidunt soluta.\n \rCulpa nisi et iusto. Nisi quia asperiores. Dolor aspernatur cumque repudiandae commodi harum voluptates dolores nihil. Molestiae fugit qui voluptates eum delectus ut. Soluta soluta vel perferendis animi laudantium pariatur eveniet rerum quas. Nisi voluptates aperiam maxime soluta illo qui aut quia.\n \rTemporibus est dignissimos porro qui. Est libero ut soluta corrupti qui enim sint. Minus impedit veritatis.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 179,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 93 },
    seo: {
      title: 'Refined Fresh Hat | Zahradnictví u Juliuse',
      description: 'Ut laborum aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Fresh Computer',
    slug: 'Tasty-Fresh-Computer',
    shortDesc: 'Est dolor voluptate consequatur quis.',
    description:
      'Possimus quia quo sint laboriosam repudiandae ut ullam nulla. Saepe nesciunt quis architecto reiciendis modi magnam sed corporis. Et est sed nulla error rerum autem est. Vero incidunt voluptatem assumenda possimus nobis et unde eos. Officia eaque dignissimos odit nulla commodi voluptatibus ab non.\n \rNatus accusantium odio omnis possimus soluta labore dolorem. Natus ut eveniet molestiae ut asperiores reprehenderit illum nihil. Quia et quos.\n \rQuaerat ex voluptatum. Aperiam dolorem voluptatem provident quis optio et. Minima sit nulla. Facere nostrum fugiat laborum adipisci quod atque praesentium quis natus.\n \rLibero fuga velit accusamus sint ipsam. Ut ullam quis voluptates sit fugit saepe quia ad. Accusantium et ipsa. Fuga deleniti voluptas sed sed.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 129,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 94 },
    seo: {
      title: 'Tasty Fresh Computer | Zahradnictví u Juliuse',
      description: 'Est dolor voluptate consequatur quis.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Tasty Steel Ball',
    slug: 'Tasty-Steel-Ball',
    shortDesc:
      'Ut ut voluptatum error nihil esse iusto quidem accusantium incidunt.',
    description:
      'Doloremque qui vitae ut dolores qui esse. Cum dolores non earum eum eius iusto praesentium. Ipsam iste aut suscipit reiciendis quibusdam eius fugiat. Esse in autem aut quaerat accusamus temporibus accusantium.\n \rVel tenetur id eos assumenda inventore alias illo. Aperiam soluta nulla sint alias. Eius qui non quia hic. Neque non fugit facere qui voluptates. Rerum explicabo sed corrupti aut assumenda harum et corrupti. Rem et natus eius repudiandae ab debitis et.\n \rItaque eum et accusantium qui ut quisquam optio autem exercitationem. Veritatis voluptatem dolorem aperiam rerum. Voluptatibus quidem modi dolor.\n \rEveniet nesciunt esse aliquid aliquid officia. Rerum sint ad eos veritatis quo praesentium nisi. Voluptas non hic saepe incidunt et et dolores. Voluptatum minus ipsum. Et expedita adipisci reprehenderit esse et unde quibusdam et.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 13 },
    seo: {
      title: 'Tasty Steel Ball | Zahradnictví u Juliuse',
      description:
        'Ut ut voluptatum error nihil esse iusto quidem accusantium incidunt.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Granite Chair',
    slug: 'Gorgeous-Granite-Chair',
    shortDesc: 'Soluta alias quis ut quo.',
    description:
      'Qui numquam eos ea aut sit dignissimos omnis enim. Totam cupiditate ipsam. Et numquam sed id magnam dolor dolorem consequatur facere. Voluptatem aspernatur aliquid. Et quia libero quam quisquam earum occaecati facere nihil est.\n \rDolor omnis maxime sed nisi molestiae ducimus qui minima id. Sed voluptatibus sit deleniti suscipit doloremque. Cumque velit inventore maxime expedita. Accusantium id ipsum placeat labore pariatur tenetur.\n \rAccusamus et animi impedit quae corrupti dolor deleniti. Non nulla et porro. Ipsa facilis explicabo officiis eos explicabo molestias velit et. Est et magni beatae explicabo doloribus saepe. Sed iusto dolores quam dolorem aut illum.\n \rVeritatis perspiciatis quo et. Explicabo quod cum ipsum beatae quis alias ad quo. Quia rerum ut ipsam est. Voluptatem ut totam optio. Voluptatem nisi autem alias id. Voluptatibus omnis excepturi sit veniam modi tempore incidunt praesentium.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 22 },
    seo: {
      title: 'Gorgeous Granite Chair | Zahradnictví u Juliuse',
      description: 'Soluta alias quis ut quo.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Metal Table',
    slug: 'Tasty-Metal-Table',
    shortDesc: 'Quia eos ea sit eos ratione consequuntur.',
    description:
      'Alias ut molestias id et. Iure esse delectus explicabo dolor iusto consequatur a. Et facere dolorem consectetur. Non qui similique dolores aperiam voluptas voluptates soluta doloribus sint. Esse occaecati atque ullam consequatur minus necessitatibus dolorem.\n \rQui maiores non sunt dolorem voluptatibus consequatur. Recusandae quasi ut molestiae eius repudiandae qui voluptatem. Voluptas enim ut id placeat non.\n \rCupiditate alias placeat sit. Tenetur unde qui non aspernatur sunt minus. Exercitationem amet voluptatibus provident provident autem. Molestias cum cupiditate. Qui nesciunt quo nulla vel. Consequuntur corrupti fugiat aut saepe quia dignissimos ex.\n \rLibero enim ut tempora rerum consequatur architecto. Quia consequatur odio mollitia fugiat. Ut ea praesentium. Veniam maiores rem voluptas tenetur veniam omnis et.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 319,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 94 },
    seo: {
      title: 'Tasty Metal Table | Zahradnictví u Juliuse',
      description: 'Quia eos ea sit eos ratione consequuntur.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Steel Cheese',
    slug: 'Gorgeous-Steel-Cheese',
    shortDesc: 'Non culpa qui.',
    description:
      'Est similique sit a. Voluptatum voluptas nihil dignissimos quis sed. Debitis illo fuga excepturi repellendus porro. Adipisci exercitationem expedita iste. Numquam placeat nihil maiores.\n \rDicta unde officiis hic ut. Labore repudiandae incidunt. Quo a consequatur aut.\n \rAut vel omnis ut aut repudiandae magnam. Vitae similique nam animi qui distinctio hic saepe optio quis. Id voluptatum quis et officiis. Culpa repellat ea molestias sapiente reprehenderit unde qui dolores est.\n \rId dolorem ut. Nam quasi non itaque cumque quidem nihil tempora qui. Sunt facere labore est provident.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 309,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 9 },
    seo: {
      title: 'Gorgeous Steel Cheese | Zahradnictví u Juliuse',
      description: 'Non culpa qui.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Rustic Rubber Shoes',
    slug: 'Rustic-Rubber-Shoes',
    shortDesc: 'Necessitatibus cumque nobis quis non exercitationem non saepe.',
    description:
      'Quo quae voluptas quis. Ad aut reprehenderit blanditiis. Veritatis et in accusantium omnis est sunt. Repudiandae nesciunt perspiciatis natus quibusdam enim ducimus quisquam recusandae. Nihil eveniet illum quidem magnam ut.\n \rEarum debitis minima dicta eveniet excepturi adipisci dolorem repellat consectetur. Amet quod autem fugit earum. Quia laborum expedita consectetur et sapiente omnis. Aspernatur ipsam nostrum.\n \rOdio quidem ipsa quia qui labore modi vitae totam est. Debitis velit ullam voluptas voluptates maxime amet eos blanditiis. Quis qui dolorum maxime necessitatibus. Dolorem accusantium corporis repellat magnam doloremque nesciunt est. Ea incidunt dolor sit. Ut ratione dolor accusamus molestiae.\n \rDebitis et dignissimos dolore laudantium. Dolorum non amet suscipit at corporis aliquam voluptatem odio fugiat. Id est sed aliquam blanditiis impedit laborum non omnis ipsum. Porro sunt ut eligendi id ratione omnis tenetur voluptate. Sed eveniet aut adipisci omnis. Cupiditate excepturi quibusdam ipsum exercitationem aut aspernatur officiis accusantium tempore.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 509,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 29 },
    seo: {
      title: 'Rustic Rubber Shoes | Zahradnictví u Juliuse',
      description:
        'Necessitatibus cumque nobis quis non exercitationem non saepe.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Rubber Chair',
    slug: 'Gorgeous-Rubber-Chair',
    shortDesc: 'Commodi voluptate blanditiis.',
    description:
      'Dignissimos in eos blanditiis voluptate molestias atque modi soluta hic. Tenetur est labore. Deserunt facere assumenda ducimus labore sit non rerum.\n \rMolestiae fugit autem provident. Ipsam sequi cupiditate. Quia reprehenderit aut et est eaque unde. Aut ab assumenda excepturi quia labore voluptas culpa enim harum. Iusto quos velit maiores eligendi aliquid non.\n \rFuga aut minus. Provident voluptas deleniti et. Commodi ut libero. Dignissimos sint sit et molestiae voluptas non neque. Mollitia necessitatibus est et consequatur omnis dolore possimus.\n \rQuo nihil ab. Voluptatem rem veritatis accusamus quos. Est ut ut aperiam. Nisi harum enim velit ab corporis quaerat delectus aut rerum. Et et veritatis architecto quibusdam. Cumque numquam quos.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 89,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 50 },
    seo: {
      title: 'Gorgeous Rubber Chair | Zahradnictví u Juliuse',
      description: 'Commodi voluptate blanditiis.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Ergonomic Cotton Gloves',
    slug: 'Ergonomic-Cotton-Gloves',
    shortDesc: 'Aperiam sapiente sed consequatur animi.',
    description:
      'Ut voluptatibus reiciendis. Magnam beatae eligendi facilis nesciunt et accusantium perferendis. Et quo ipsa veniam ut.\n \rEum ipsam quam et. Velit commodi quos a. Similique doloribus minus sed sint voluptatem rerum. Ipsam consequatur nobis commodi et ut ipsum praesentium. Nisi mollitia rerum quidem eius sequi perspiciatis. Sint expedita dolor placeat quia consequatur.\n \rVel quod illum odio expedita est. Amet ex aut. Autem perspiciatis quod reiciendis exercitationem fugiat magni eum labore est. Exercitationem vel et consequatur aut explicabo. Autem rem eveniet ut ullam nihil.\n \rPorro ratione ipsum sit impedit officiis id libero. Nihil velit voluptas enim error nihil quis. Porro quas et quas iure facere. Soluta maiores fuga molestias. Quo aliquid impedit esse maiores eius aut vel. Voluptatem aut aut distinctio.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 329,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 61 },
    seo: {
      title: 'Ergonomic Cotton Gloves | Zahradnictví u Juliuse',
      description: 'Aperiam sapiente sed consequatur animi.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Intelligent Granite Chicken',
    slug: 'Intelligent-Granite-Chicken',
    shortDesc: 'Excepturi tempora mollitia voluptatibus.',
    description:
      'Aspernatur tempore et neque voluptatem consequatur dolor. Possimus aliquid qui quas sed veniam. Totam harum laudantium. Occaecati inventore quo ratione et eius. Deleniti placeat et hic.\n \rProvident harum quibusdam numquam nihil expedita. Qui quae ut. Et consequatur qui. Qui facere in natus consequatur. Vitae dolores aut dicta minima dolores aliquid. Totam autem enim optio minima rerum maxime.\n \rAlias veritatis excepturi aut repudiandae qui. Incidunt ex neque voluptates. Harum asperiores temporibus est.\n \rPossimus voluptas magni voluptates non vel. Earum voluptatem veniam. Molestiae nisi tenetur quibusdam mollitia nihil enim. Debitis aspernatur quae sit dolores consequatur maiores corrupti similique voluptatem. Esse est est sint impedit non nihil deleniti voluptatum dolor. Tenetur distinctio hic deserunt recusandae est inventore.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 309,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 15 },
    seo: {
      title: 'Intelligent Granite Chicken | Zahradnictví u Juliuse',
      description: 'Excepturi tempora mollitia voluptatibus.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Fresh Car',
    slug: 'Gorgeous-Fresh-Car',
    shortDesc: 'Ut molestias quia iusto inventore.',
    description:
      'Omnis et voluptatem quod maiores quia ratione ut animi et. Totam possimus perferendis aut. Aliquam dignissimos quia perferendis. Ipsam qui quo quis nihil. Voluptatum repellat libero cum distinctio aut quae. Mollitia blanditiis rerum recusandae nesciunt.\n \rEx et maiores accusantium non vel qui. Beatae modi quis quisquam vel ullam magni porro eaque animi. Et officiis recusandae eum provident qui.\n \rIpsam nostrum accusantium officiis et cumque veritatis qui ea. Labore rem corrupti tempore et dignissimos hic maxime. Perferendis est necessitatibus animi est modi nostrum iusto ex natus. Vel et quia.\n \rQui nihil qui molestias. Sequi sunt nostrum hic minus aut natus. Inventore accusantium aut expedita veniam non. Dolor cumque est velit voluptates nobis id. Dolor ea enim et deserunt qui asperiores rerum nam laudantium. Sint quod sed voluptas saepe molestiae voluptas.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 399,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 7 },
    seo: {
      title: 'Gorgeous Fresh Car | Zahradnictví u Juliuse',
      description: 'Ut molestias quia iusto inventore.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Licensed Rubber Gloves',
    slug: 'Licensed-Rubber-Gloves',
    shortDesc:
      'Neque dolores eveniet ipsa consequatur excepturi consequuntur sint non quis.',
    description:
      'Quos sed itaque repellendus consequuntur et sequi in qui. Iusto sint animi at laborum ipsum et aliquam. Ex et quod id suscipit consequatur quos in sint. Aliquam voluptatem excepturi nemo ea sit eaque id et.\n \rSit consequatur numquam perferendis. Veritatis quibusdam earum facilis nihil est sed porro. Qui possimus nisi.\n \rEt ut id qui. Corporis ab aut unde omnis. Iure veritatis itaque voluptas illum voluptatem. Sint in voluptatibus debitis rerum repellendus qui illo aliquid.\n \rMolestiae quo pariatur in velit quia et soluta unde eveniet. Eius natus corrupti nesciunt id ullam corrupti ab. Nesciunt voluptas illo aliquam cumque odit vitae repudiandae.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 54 },
    seo: {
      title: 'Licensed Rubber Gloves | Zahradnictví u Juliuse',
      description:
        'Neque dolores eveniet ipsa consequatur excepturi consequuntur sint non quis.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Tasty Steel Mouse',
    slug: 'Tasty-Steel-Mouse',
    shortDesc: 'Assumenda labore in consequatur libero at.',
    description:
      'Vitae aspernatur assumenda omnis. Hic odio et et. Commodi dolore eos quae omnis praesentium eaque libero.\n \rIn deserunt dolorum. Et ipsum rerum perferendis sed vel. Qui consequuntur et non natus est alias eius mollitia. Officiis doloremque tempora.\n \rQui aut quibusdam. Molestiae explicabo velit fugiat ut necessitatibus. Placeat voluptatem magni possimus at repellat. Cum quo soluta quod sint fugiat nisi. Cupiditate mollitia rerum quibusdam vero eos. Sunt itaque dolor officia aut voluptas quibusdam expedita.\n \rMolestias quo pariatur non laudantium rerum voluptatem. Ea qui sed. Dolorem ut temporibus tempora ea voluptas aspernatur natus consectetur id.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 239,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 74 },
    seo: {
      title: 'Tasty Steel Mouse | Zahradnictví u Juliuse',
      description: 'Assumenda labore in consequatur libero at.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Licensed Cotton Shirt',
    slug: 'Licensed-Cotton-Shirt',
    shortDesc:
      'Tempore molestias et sequi dolor molestiae consequatur qui omnis rem.',
    description:
      'Officia itaque voluptatem omnis nostrum autem iure sed placeat. Magni eaque culpa quidem consequatur ut dolore dicta. Totam beatae et vel sunt et est sint. Quia beatae dicta labore deleniti consequatur ut. Maxime omnis suscipit est error laborum illo. Harum atque sed maxime nulla.\n \rQuis ipsum hic voluptatem ea temporibus omnis hic magni. Odit ut modi qui aut voluptatibus. Laborum autem accusantium. Sed saepe sed ipsum repellat delectus.\n \rNisi fuga facilis corporis itaque blanditiis veniam nihil quos. Nam est esse esse alias ratione repellendus pariatur ut. Quos sint commodi totam ducimus veniam in nesciunt. Quia dolor cum porro nisi labore. Eligendi in ut assumenda ea cumque ut.\n \rEaque fugit debitis et ipsam in ut vero animi repellat. Cum harum ipsa enim adipisci quo aut molestiae voluptas. Aut ipsum at. Incidunt et vitae.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 80 },
    seo: {
      title: 'Licensed Cotton Shirt | Zahradnictví u Juliuse',
      description:
        'Tempore molestias et sequi dolor molestiae consequatur qui omnis rem.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Unbranded Concrete Chicken',
    slug: 'Unbranded-Concrete-Chicken',
    shortDesc: 'Minus nihil repellat qui laborum facilis.',
    description:
      'Excepturi dolore perspiciatis quaerat. Provident ea voluptas harum sit quia aut architecto est. Eveniet saepe ipsam architecto qui ratione qui totam. Magnam quia voluptates aut est veritatis repudiandae.\n \rEst voluptatem est dolorem quo. Delectus earum quia et qui odio quia fugit ea. Consequuntur optio ducimus aut distinctio. Ea cumque voluptas ad alias est quis recusandae voluptatem. Et harum harum.\n \rTotam magnam non aliquid. Id officiis omnis eos consequuntur quis. Iste impedit et sint quia vel culpa provident.\n \rNostrum accusamus itaque non saepe nihil excepturi quibusdam. Reiciendis voluptatem enim at. Fugit culpa quia et illum. Qui rerum placeat debitis perspiciatis. Harum temporibus reiciendis eveniet doloribus vel quos eius provident dicta. Porro ut aut itaque.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 109,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 14 },
    seo: {
      title: 'Unbranded Concrete Chicken | Zahradnictví u Juliuse',
      description: 'Minus nihil repellat qui laborum facilis.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Sleek Metal Car',
    slug: 'Sleek-Metal-Car',
    shortDesc: 'Cumque est veritatis nihil laborum eum dolores.',
    description:
      'Eius impedit rerum dolorem. Iure facilis quod earum temporibus autem dicta eaque est maiores. Nisi id dolor et modi facere corporis eos. Molestiae in aut voluptatum sapiente ad non. Quos voluptatum nam velit mollitia tempore. Voluptas esse fuga id ut et facere.\n \rExcepturi totam suscipit architecto et error et. Vero veniam blanditiis explicabo molestiae culpa quia consequatur ipsum qui. Repellat qui porro aspernatur quaerat non officia maxime doloremque. Amet ut cupiditate odio enim consequuntur nulla. Qui expedita quidem excepturi eos cumque veniam odio voluptatem. Omnis molestiae enim ex ducimus nihil voluptatum.\n \rVoluptate vel quia qui earum officiis qui. Id iure temporibus ipsum assumenda et illo enim sapiente aliquid. Iusto explicabo explicabo odio vero magnam quos. Voluptatum ex dolor unde.\n \rEt enim possimus dolorum vel suscipit consequuntur veritatis nisi. Qui officiis reiciendis nihil culpa. Aut sint qui. Nulla rerum facere commodi. Eos voluptates eos quidem non quasi aspernatur quod perferendis dolor. Quos iusto vitae.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Sleek Metal Car | Zahradnictví u Juliuse',
      description: 'Cumque est veritatis nihil laborum eum dolores.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Refined Fresh Fish',
    slug: 'Refined-Fresh-Fish',
    shortDesc: 'Laudantium necessitatibus nemo ipsum dolor magni minima autem.',
    description:
      'Non magni cumque maxime iste atque. Ipsa aut est impedit dolorem veritatis ut qui quas sunt. Veritatis quia rerum ut impedit quae.\n \rOdio et qui qui cupiditate vero libero numquam. Necessitatibus incidunt praesentium voluptatem. Alias quidem possimus aut sint laudantium occaecati et quas similique. Ut explicabo sint maiores est qui et atque incidunt ullam. Adipisci neque odio.\n \rEsse consequatur iure tenetur est sint et illum totam. Maxime quam dolorem eligendi. Quis neque numquam ex ad.\n \rMagnam rerum quidem est aspernatur illo qui. Harum molestiae velit et voluptas quos ut itaque aliquid eius. At minima aliquam. Debitis et odio et laborum suscipit qui cumque. Reprehenderit necessitatibus autem magnam cum qui vitae molestias dolorem. Nemo facilis aut ipsum qui alias cumque sunt.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 90 },
    seo: {
      title: 'Refined Fresh Fish | Zahradnictví u Juliuse',
      description:
        'Laudantium necessitatibus nemo ipsum dolor magni minima autem.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Small Steel Pants',
    slug: 'Small-Steel-Pants',
    shortDesc: 'Veritatis tempore aut.',
    description:
      'Sint a soluta quo quos sit totam tenetur. Dolores cumque quos quia fuga. Atque eius aut rerum asperiores vitae ut est. Velit magnam consequatur nobis.\n \rReprehenderit vel ducimus dolor aut et. Maiores iure deserunt alias provident qui. In ut veniam omnis doloribus. Et eos deleniti consequatur. Inventore non ut optio doloribus omnis blanditiis. Voluptatibus iusto consequatur error et earum et culpa nesciunt.\n \rNam atque est. Molestiae rerum libero. Molestiae enim voluptatibus aperiam et voluptatem eum expedita qui et.\n \rAut voluptas provident voluptatibus voluptatem asperiores optio quia at. Quo tempore et praesentium soluta consequuntur. Aspernatur nulla hic et facere ut.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 43 },
    seo: {
      title: 'Small Steel Pants | Zahradnictví u Juliuse',
      description: 'Veritatis tempore aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Unbranded Concrete Shoes',
    slug: 'Unbranded-Concrete-Shoes',
    shortDesc: 'Qui ducimus et ex exercitationem sed laboriosam.',
    description:
      'Assumenda unde sint. Accusamus at et commodi dolor. Iusto fugit expedita veniam architecto animi illo voluptatem. Quo voluptatum praesentium qui ut quidem qui et. Magnam aliquam et alias ad non minus omnis nam molestiae.\n \rQuia temporibus cumque assumenda natus. Voluptates adipisci vel eligendi quaerat consequuntur possimus commodi. Ut aut qui molestiae earum ullam sunt facere odit. Et quia nihil iste consequatur animi unde officiis nihil.\n \rQuis deserunt exercitationem eaque. Laudantium sapiente porro voluptas ut veritatis accusantium fugit porro. Quos suscipit praesentium esse neque magnam id. Culpa similique fugit fugit nostrum. Numquam quae aspernatur.\n \rDucimus vitae esse assumenda et aperiam. Eaque aut ad natus ratione delectus nihil ex dolores. Qui sunt dolores et. Voluptatem aspernatur voluptatem unde quis corporis illum est. Deserunt necessitatibus id et rem cupiditate et pariatur aperiam aliquam. Officiis libero enim et qui a rem dolore animi omnis.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 329,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 78 },
    seo: {
      title: 'Unbranded Concrete Shoes | Zahradnictví u Juliuse',
      description: 'Qui ducimus et ex exercitationem sed laboriosam.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Rubber Sausages',
    slug: 'Gorgeous-Rubber-Sausages',
    shortDesc: 'Animi rem eveniet consequatur odio.',
    description:
      'Aut corrupti perferendis et. Esse ut vel. Libero assumenda dolor incidunt aspernatur at explicabo nostrum optio. Et voluptas id ad rem facilis quia inventore ducimus. Delectus est cum.\n \rRem repellat natus laudantium molestias. Corporis mollitia perspiciatis laborum non impedit perspiciatis nobis aliquid voluptatum. Et neque occaecati tenetur fugit debitis. Et consequatur ducimus in rem similique hic neque.\n \rFacilis repellat libero facilis. Voluptatum maxime totam pariatur ut sint possimus nihil repellendus ducimus. Et explicabo aliquam ut distinctio. Officiis ut corporis dignissimos vel nam ipsam.\n \rEnim cupiditate exercitationem. Qui repellat architecto magnam hic et. Non tempora at in. Voluptatem qui sed ad.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 48 },
    seo: {
      title: 'Gorgeous Rubber Sausages | Zahradnictví u Juliuse',
      description: 'Animi rem eveniet consequatur odio.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Concrete Hat',
    slug: 'Gorgeous-Concrete-Hat',
    shortDesc: 'Neque rerum aperiam ut voluptate nihil repellat.',
    description:
      'Aliquam reprehenderit exercitationem voluptatem provident dolorem. Accusamus temporibus optio. Perferendis rerum reprehenderit quos enim hic ipsum enim. Consectetur qui et reprehenderit. Occaecati quis molestiae ipsa et ea quisquam.\n \rIure et quae. Quibusdam occaecati quis. Ut eum quam consectetur nulla doloribus quae corrupti. Provident explicabo ut soluta. Esse et ut consequuntur velit est magni.\n \rCommodi eum cum voluptate. Aperiam unde ut ut tempora nemo voluptas id recusandae. Laboriosam delectus ut est dolorem nulla optio et. Porro aut nihil iusto.\n \rSapiente et iste eaque. Doloremque consequatur quas placeat dolorem non. Voluptatem fugiat eligendi. Aut et porro quam suscipit quia officia sint et.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 559,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 92 },
    seo: {
      title: 'Gorgeous Concrete Hat | Zahradnictví u Juliuse',
      description: 'Neque rerum aperiam ut voluptate nihil repellat.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Fantastic Plastic Bike',
    slug: 'Fantastic-Plastic-Bike',
    shortDesc: 'Omnis praesentium non ipsum.',
    description:
      'Omnis ut exercitationem commodi aut repudiandae. Error vel quod qui optio nisi dicta ipsum. Neque quidem et eveniet dolorum iusto ipsa officiis quia.\n \rMolestiae molestiae vel sit est. Laudantium veniam molestias recusandae dolorem magni sed sit. Pariatur magni enim sed qui fugiat dolorem praesentium eveniet. Voluptatem praesentium optio quis cum. Laudantium vel quis sed sit. Nostrum autem quia debitis sed eligendi sapiente consectetur.\n \rEt quam quam quis. Quas non ipsa facere. Eaque incidunt minus repudiandae totam accusantium.\n \rImpedit minus rem occaecati illum impedit. Ullam eum officiis nulla occaecati error dolorem odio. Eius voluptas omnis voluptatem.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 329,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 85 },
    seo: {
      title: 'Fantastic Plastic Bike | Zahradnictví u Juliuse',
      description: 'Omnis praesentium non ipsum.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Metal Sausages',
    slug: 'Tasty-Metal-Sausages',
    shortDesc: 'Sit inventore delectus quae facilis totam sit.',
    description:
      'Maiores in ipsum non nesciunt. Veniam veritatis fugit et. Aut officiis debitis alias aut. Et excepturi voluptatibus quia sint.\n \rDoloribus blanditiis aut. Possimus enim asperiores ea quis ea quia voluptate. Optio aut sint necessitatibus possimus inventore. Facere recusandae officia. Aut magnam consequatur ut.\n \rQuae ipsum nemo nesciunt repellat alias porro omnis suscipit magni. Nostrum rerum ad aliquid id quisquam. Quasi sit similique ipsa doloribus. Itaque quibusdam aut iste eum voluptatem eius voluptas accusamus ea. Placeat sint et id quasi laudantium. Qui est laborum.\n \rTenetur eaque sed minus voluptas dolor assumenda. Minima atque reprehenderit. Dolore nesciunt possimus minus sunt minima cum. Sint officia voluptas quod aspernatur totam.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 479,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 54 },
    seo: {
      title: 'Tasty Metal Sausages | Zahradnictví u Juliuse',
      description: 'Sit inventore delectus quae facilis totam sit.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Wooden Bike',
    slug: 'Gorgeous-Wooden-Bike',
    shortDesc:
      'Sapiente quis commodi saepe alias laboriosam iure eum est officiis.',
    description:
      'Qui aut sunt dolorum rerum eum facere officia. Repellendus est facilis accusantium eveniet quia animi nesciunt. Ut qui nulla officiis officiis minus sed. Voluptatem perferendis magni sed consequatur aperiam laudantium molestiae. Iste molestiae eius laborum distinctio tempore et nihil.\n \rIpsam neque nihil velit iusto. Et aliquam sed a repellendus dolores ut non. Occaecati eveniet voluptatibus expedita voluptatem eos rerum. Et commodi necessitatibus delectus.\n \rVoluptatem ad consequatur. Nostrum laudantium vitae quibusdam fugiat officia ipsum. Modi enim et autem veritatis inventore. Ut inventore rerum. Ullam tenetur aut. Provident voluptatem sunt rerum consequatur repellendus aliquam.\n \rAliquid sit nam possimus et quisquam nam ab architecto voluptatum. Ex laudantium quas illo quis deserunt nostrum mollitia veniam. Quia quasi doloremque dolorum assumenda consequuntur deleniti. Porro dicta qui mollitia. Praesentium in sunt omnis ut ut. Et vero vel asperiores eius.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 379,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 14 },
    seo: {
      title: 'Gorgeous Wooden Bike | Zahradnictví u Juliuse',
      description:
        'Sapiente quis commodi saepe alias laboriosam iure eum est officiis.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Wooden Table',
    slug: 'Practical-Wooden-Table',
    shortDesc: 'Molestias provident animi voluptatem omnis aliquid saepe in.',
    description:
      'Sint eum aliquid mollitia possimus sit autem. Est ipsa qui qui vero ipsam explicabo saepe sit. Animi est qui ipsum et omnis. Aliquam repellendus sed est vitae molestiae dignissimos. Corrupti amet vero non explicabo dolorem quam nam cumque. Exercitationem perferendis nemo doloribus nisi quia.\n \rMollitia eum corporis. Iste quidem ducimus sunt sed. Dolorem id molestias voluptate natus. Non quidem atque.\n \rRatione aut nihil. Consequatur assumenda nostrum inventore optio cum. Quo vero facere quasi temporibus et.\n \rAdipisci cupiditate provident dolor labore. Consectetur inventore rerum a voluptatibus eum rem ratione. Aliquid minus amet itaque voluptas. Laboriosam sit odio facilis illo rerum aut cum omnis non.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 17 },
    seo: {
      title: 'Practical Wooden Table | Zahradnictví u Juliuse',
      description:
        'Molestias provident animi voluptatem omnis aliquid saepe in.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Incredible Concrete Shirt',
    slug: 'Incredible-Concrete-Shirt',
    shortDesc: 'Quas molestias voluptas suscipit totam omnis.',
    description:
      'Et aut atque voluptatibus quidem. Culpa cumque culpa omnis. Deserunt atque a eum autem voluptatibus. Iusto modi iste. Quas est velit dolores nisi omnis quia. Enim ipsam consequuntur.\n \rAliquam fugiat amet neque a sed qui voluptates. Natus deleniti est culpa cum. Facere voluptatem voluptas beatae. Quaerat libero consequatur rerum ea fugiat itaque molestias quo suscipit.\n \rVitae excepturi eos ullam aut. Reiciendis dolores natus explicabo. Natus officiis veritatis sed expedita. Ducimus aliquam error laboriosam non repudiandae omnis.\n \rId voluptatem mollitia voluptas est dolores pariatur blanditiis minus eaque. Voluptatem dolorem consequatur consequatur ducimus non rerum rerum accusantium pariatur. Debitis deserunt earum. Consequatur molestias atque a doloremque amet eveniet aut accusamus aut. In non commodi consequatur quo.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 159,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 61 },
    seo: {
      title: 'Incredible Concrete Shirt | Zahradnictví u Juliuse',
      description: 'Quas molestias voluptas suscipit totam omnis.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Granite Sausages',
    slug: 'Sleek-Granite-Sausages',
    shortDesc: 'Beatae eveniet quis amet omnis rerum.',
    description:
      'Suscipit perferendis perferendis dolores sit. Voluptate est quia cumque aperiam. Voluptate et dolores sapiente quaerat eos corporis reprehenderit et voluptatem. Voluptates ut accusantium assumenda. Qui dolor occaecati.\n \rBeatae harum nisi. Accusantium eligendi odio sit maiores suscipit atque reiciendis. Qui qui inventore voluptates maiores magni accusantium.\n \rVoluptatem quo reiciendis qui aut recusandae ut et placeat. Minus quia fugit aliquid nulla voluptatum. Consequatur officia et qui. Delectus autem voluptatem in ut.\n \rRerum optio occaecati laudantium perferendis. Dolor beatae et nulla aut accusantium voluptatem in. Ea tempore enim ratione ex. Minima sit voluptas qui voluptas doloribus ea quidem aspernatur.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 259,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 87 },
    seo: {
      title: 'Sleek Granite Sausages | Zahradnictví u Juliuse',
      description: 'Beatae eveniet quis amet omnis rerum.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Handmade Steel Mouse',
    slug: 'Handmade-Steel-Mouse',
    shortDesc: 'Ducimus maxime unde.',
    description:
      'Mollitia voluptatem laborum assumenda quos quasi inventore omnis explicabo provident. Voluptas modi ipsum nesciunt reprehenderit ex. Voluptas vitae recusandae. Ut accusantium ut ipsum aliquam rerum dolores et sint. Nihil voluptate sit ut dolor.\n \rRecusandae dolorum soluta ut tenetur quaerat. Est qui enim nulla exercitationem enim laboriosam fugit blanditiis distinctio. Quo dolorem possimus illum. Minima laboriosam molestiae.\n \rConsequatur incidunt corrupti et saepe praesentium. Illo unde natus. Libero et quia. Et quod aspernatur nobis autem quibusdam. Accusamus qui ut nihil aut ut laborum consequatur quo. Ut quis quod voluptas commodi rerum.\n \rAut aspernatur veniam et ipsum omnis. Voluptates voluptates omnis voluptatibus nihil ipsum. Consectetur laboriosam libero recusandae neque sapiente omnis.',
    category: {
      name: 'Bylinky',
      slug: 'bylinky',
      background: 'https://api-dp-eshop.web.app/images/cat/bylinky.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    price: 49,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Handmade Steel Mouse | Zahradnictví u Juliuse',
      description: 'Ducimus maxime unde.',
      image:
        'https://api-dp-eshop.web.app/images/products/bylinky/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Ergonomic Plastic Table',
    slug: 'Ergonomic-Plastic-Table',
    shortDesc: 'Et ullam deleniti enim ut.',
    description:
      'Minus eos fuga assumenda expedita iure error quos perspiciatis quae. Sed quam harum voluptates. Itaque tempore ratione magni reiciendis unde et labore dignissimos.\n \rOfficia quas accusantium. Aut rerum quam. Blanditiis reprehenderit dolorem dolores veritatis aut et. Est error dolor labore occaecati rerum ut quis voluptatum.\n \rEt nulla architecto. Ipsa incidunt blanditiis repellendus et delectus quidem corrupti. Totam facere fugiat deserunt optio labore. Est et quo saepe. Ratione et suscipit ex. Suscipit dolor esse inventore natus neque possimus.\n \rEt voluptatem vero. Maiores voluptatem quia quod et. Sint laborum quia libero sed perspiciatis. Nihil sapiente quaerat reprehenderit. Quas consequuntur magnam aut quis reiciendis deserunt omnis praesentium voluptas.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 549,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 23 },
    seo: {
      title: 'Ergonomic Plastic Table | Zahradnictví u Juliuse',
      description: 'Et ullam deleniti enim ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Cotton Keyboard',
    slug: 'Gorgeous-Cotton-Keyboard',
    shortDesc: 'Tempore facilis possimus necessitatibus.',
    description:
      'Maxime et id et. Nobis tenetur ut. Sunt optio fuga ratione sapiente voluptatibus consequatur magnam amet accusamus. Ad possimus ut nemo unde alias.\n \rSed ab nemo. Sint quibusdam consequuntur. Et placeat sed aut. Rerum aliquam ut laborum nihil necessitatibus.\n \rVeritatis blanditiis aliquid pariatur et omnis iusto placeat vero. Nostrum qui iusto autem enim distinctio. Et ad quibusdam id perferendis reiciendis est eum. Aliquid et ut.\n \rIure odit vel id eos. Aut laborum nemo ut. Aliquid id voluptas iure animi omnis recusandae temporibus est. Quia necessitatibus sed ut voluptates aliquam. Repellat qui commodi eos repellendus quasi aspernatur. Quos molestiae molestiae est.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 519,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 25 },
    seo: {
      title: 'Gorgeous Cotton Keyboard | Zahradnictví u Juliuse',
      description: 'Tempore facilis possimus necessitatibus.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Handmade Concrete Mouse',
    slug: 'Handmade-Concrete-Mouse',
    shortDesc: 'Corporis vel sunt labore consequatur.',
    description:
      'Qui aut autem beatae necessitatibus. Aperiam eos nam quaerat possimus laboriosam et similique in. Voluptatibus sapiente corrupti doloremque. Qui ad itaque et doloremque et et. Qui iure veniam dolor hic. Quis qui excepturi incidunt atque qui facilis perferendis quam ut.\n \rNisi hic voluptas voluptatem provident explicabo. Voluptatibus laborum molestiae odit quia eos est tempora dolores non. Asperiores ut perferendis et architecto unde saepe excepturi incidunt. Numquam sequi aut in similique. Voluptatem voluptatem tempore dolorem sapiente porro sed.\n \rQuia quia dolorum non sunt. Fuga consequatur non voluptatibus aspernatur non ipsa rerum quos. Aut accusamus maxime fuga iste accusamus molestiae fugiat.\n \rDebitis ipsam tenetur minima eum. Totam dolore et asperiores quam labore aliquid. Voluptatibus est voluptatum alias neque sit cum error. Quas perspiciatis facere mollitia blanditiis nihil aut.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 24 },
    seo: {
      title: 'Handmade Concrete Mouse | Zahradnictví u Juliuse',
      description: 'Corporis vel sunt labore consequatur.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Cotton Bacon',
    slug: 'Tasty-Cotton-Bacon',
    shortDesc: 'Quia et ratione sit ut ducimus sed.',
    description:
      'Dolorum voluptatem autem voluptates. Necessitatibus unde consectetur natus consequatur non molestiae molestias mollitia. Unde voluptatem porro ducimus saepe ratione aut ducimus consequatur numquam. Distinctio qui aut dolorum vitae sit voluptatem provident quis quidem. Iure nesciunt dolorum et beatae voluptatem quia delectus.\n \rRatione et occaecati ratione voluptas quod. Modi aspernatur eos explicabo alias ut voluptatem ratione doloremque quae. Aut earum omnis autem nesciunt id.\n \rEligendi soluta exercitationem consequatur ducimus totam nisi fugiat sit. Sed quia voluptas ratione laboriosam voluptatem quaerat natus architecto exercitationem. Ipsum saepe et accusamus in possimus.\n \rEst ab cum asperiores commodi. Fuga sit voluptatum. Repellat velit nesciunt iste iure ut et. Explicabo iure harum inventore officiis accusamus facilis qui officiis. Consectetur aut quas voluptatem corrupti. Ea et nostrum dolorem.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 28 },
    seo: {
      title: 'Tasty Cotton Bacon | Zahradnictví u Juliuse',
      description: 'Quia et ratione sit ut ducimus sed.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Intelligent Cotton Pants',
    slug: 'Intelligent-Cotton-Pants',
    shortDesc: 'Odit fugit consequuntur numquam provident consequatur hic.',
    description:
      'Praesentium dolorem perspiciatis nihil assumenda voluptatum nihil. Eum veritatis aut neque non ut rerum aut expedita. Iure dolores et eaque consequatur delectus in velit quasi autem. Maiores aut praesentium illo. Voluptatibus quis mollitia.\n \rEt assumenda voluptas rerum quibusdam libero earum reiciendis quia. Nulla molestiae at voluptas mollitia. Vero cumque sint illum magnam rerum incidunt sed.\n \rLaudantium deleniti quis in iure fugiat facilis est. Est dolor repellat facere quis odit sit voluptas. Aut soluta culpa sed minima. Et non quas fugiat rerum sit voluptatem magni tempora. Odio unde temporibus minus. Provident sit ut nisi quod dolorem.\n \rAperiam qui quam ipsam eveniet. Et illum sit fugiat. Qui eum blanditiis officia sit magnam. Et sapiente eius dolorem et est eum ut. Dolores quisquam laboriosam magnam corporis doloremque. Sit qui culpa iusto vero magnam possimus atque pariatur esse.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 49,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Intelligent Cotton Pants | Zahradnictví u Juliuse',
      description: 'Odit fugit consequuntur numquam provident consequatur hic.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Ergonomic Fresh Hat',
    slug: 'Ergonomic-Fresh-Hat',
    shortDesc: 'Suscipit iure quo maiores qui neque.',
    description:
      'Praesentium qui et odit. Magnam asperiores qui omnis earum et pariatur. Dolor rerum enim.\n \rSequi voluptatem harum est consequatur a voluptates omnis sapiente nulla. Et et ea ea voluptatem aliquid magni aperiam laudantium in. Ea ad praesentium. Tenetur veritatis corrupti deserunt repudiandae deleniti tempore est in nisi. Sed quibusdam rerum illo voluptatem.\n \rRem voluptatum laboriosam facilis et amet. Velit reprehenderit provident distinctio. Aliquam rerum est sed aut nulla. Labore recusandae aut non.\n \rSit quam qui cumque vel ipsa odit. Nesciunt voluptatem rerum ipsum repellendus ad ut voluptate quas consequuntur. Quae sed expedita modi. Sed soluta sed velit debitis. Voluptas necessitatibus similique delectus aspernatur numquam et est. Neque doloremque quos debitis enim aliquam.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 109,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 91 },
    seo: {
      title: 'Ergonomic Fresh Hat | Zahradnictví u Juliuse',
      description: 'Suscipit iure quo maiores qui neque.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Refined Granite Ball',
    slug: 'Refined-Granite-Ball',
    shortDesc:
      'Minus deleniti error magni voluptatem qui harum itaque est unde.',
    description:
      'Sunt iste delectus quidem impedit neque. Et est repellendus rerum incidunt. Recusandae atque distinctio reprehenderit et fugit voluptatem autem facere eius. Autem omnis rerum quia. Debitis est recusandae. Rerum veritatis molestiae voluptatem qui.\n \rSuscipit illum quod itaque enim neque alias. Qui omnis fuga labore qui. Quidem delectus aut expedita aliquid odio hic provident minus. Ut tenetur consequatur aperiam.\n \rOfficia error natus molestias assumenda. Ea accusamus necessitatibus aspernatur commodi rem neque error. Enim in placeat id vero asperiores. Amet praesentium alias molestiae hic aut occaecati tempora. Deserunt doloremque quae et sit molestiae.\n \rNemo nam error dolorem rerum. Debitis quibusdam et nam eos aperiam. Sed qui hic corrupti sint. Quia eius eos blanditiis porro dignissimos qui incidunt temporibus.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 559,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 15 },
    seo: {
      title: 'Refined Granite Ball | Zahradnictví u Juliuse',
      description:
        'Minus deleniti error magni voluptatem qui harum itaque est unde.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Refined Plastic Towels',
    slug: 'Refined-Plastic-Towels',
    shortDesc: 'Ut iure maiores consequatur labore voluptas minus error.',
    description:
      'Omnis cum sed assumenda. Sed qui quos. Rem doloremque laudantium eos quis similique impedit suscipit unde consequatur.\n \rDolores nam qui ut magni a reprehenderit. Quam sed enim eligendi officiis temporibus. Ut mollitia quaerat. Libero quasi exercitationem nulla ipsum quae quis necessitatibus. Quia iure officiis repellat suscipit est eaque cumque itaque cumque. Mollitia labore voluptatem voluptate sit eos totam.\n \rEt aspernatur illum id optio quo. Sequi voluptas alias quas. Earum fugiat laudantium voluptatem vel exercitationem nisi omnis.\n \rQuaerat modi et. Provident animi voluptatem totam rerum aut illum cum necessitatibus hic. Eligendi iste velit magni id. Animi modi aut. Quo quod dolores. Quo delectus rerum itaque et tempore eos alias hic ea.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 169,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 85 },
    seo: {
      title: 'Refined Plastic Towels | Zahradnictví u Juliuse',
      description: 'Ut iure maiores consequatur labore voluptas minus error.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Licensed Metal Pants',
    slug: 'Licensed-Metal-Pants',
    shortDesc: 'Molestiae temporibus ea ea.',
    description:
      'Esse consectetur quia ad. Tempore voluptas voluptatem qui minus. Distinctio odio ullam et id harum vero odio debitis ut. Distinctio accusantium veritatis consequuntur inventore enim nisi. Dolor explicabo dolor nemo ex voluptas neque necessitatibus enim.\n \rPlaceat aut amet maiores fugiat magnam voluptas non. Mollitia tempore nostrum aut ut porro. Vero suscipit neque fugiat. Unde commodi in omnis nihil.\n \rIncidunt dicta autem. Pariatur et molestiae. Quam sint et iure et. Et alias assumenda dolor dicta autem eos. Quisquam sit est nostrum sunt. Sapiente quod fugit a non omnis qui corrupti et.\n \rQuisquam ad nostrum velit sed. Possimus nemo ex dignissimos similique minus repudiandae. Facilis nostrum quae occaecati perferendis sed dolor mollitia maiores. Perferendis dicta est. Facere qui incidunt soluta beatae assumenda dolorem non. Architecto et eaque voluptatem incidunt praesentium velit quae cum distinctio.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 58 },
    seo: {
      title: 'Licensed Metal Pants | Zahradnictví u Juliuse',
      description: 'Molestiae temporibus ea ea.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Refined Wooden Keyboard',
    slug: 'Refined-Wooden-Keyboard',
    shortDesc:
      'Nostrum hic omnis minima quisquam aspernatur placeat tempora velit.',
    description:
      'Quia labore accusamus magnam quibusdam rerum nam quisquam. Repellendus commodi perferendis maiores vero omnis ad facilis porro. Ut corporis molestiae dolorem. Qui quos vero quod ratione consequuntur sit adipisci. Sit deserunt qui nostrum fuga accusamus aperiam eligendi qui. Corrupti assumenda eius qui qui ut hic iure minus.\n \rExpedita amet consequatur voluptas doloremque quis laudantium aut excepturi nostrum. Vel dolorem impedit natus minus similique voluptatem qui. Eligendi in quo. Est enim nulla tempora similique facere doloribus libero. Non qui eveniet recusandae porro.\n \rLaborum perferendis possimus quis aut odio optio modi. Sit corrupti occaecati in repellendus. Iste non voluptatum.\n \rDolorem ea dignissimos sint quas cumque blanditiis dicta distinctio qui. Ex consequatur voluptatem harum necessitatibus necessitatibus rerum beatae numquam reiciendis. Possimus libero ut voluptas ut ut facilis sequi.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 14 },
    seo: {
      title: 'Refined Wooden Keyboard | Zahradnictví u Juliuse',
      description:
        'Nostrum hic omnis minima quisquam aspernatur placeat tempora velit.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Rustic Fresh Car',
    slug: 'Rustic-Fresh-Car',
    shortDesc: 'Nemo alias sit et saepe ut quis totam vero quis.',
    description:
      'Mollitia quo doloremque odit praesentium beatae est velit autem officiis. Iure non eius qui ex quae accusamus sapiente. Earum enim aspernatur soluta sed id expedita sit. Corrupti molestias cumque expedita.\n \rNumquam veritatis quibusdam nihil ab quo est. Ut exercitationem qui. Sunt esse eum ipsa omnis optio quis aut suscipit aut. Aut odit ipsam. Fugiat ratione consequatur voluptas molestias.\n \rNemo qui praesentium voluptates ea suscipit amet dolores. Accusamus et sed ad voluptatibus sunt tenetur. Consequatur dolor veniam aut sit voluptates ut impedit rerum. Deserunt molestias qui illo reprehenderit officia recusandae modi.\n \rUnde et iure quod eos. Minus quasi fugit quas sunt quos voluptatibus ut voluptatibus autem. Inventore modi quis est facere vel in. Ullam harum iusto ut laudantium est.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 379,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 96 },
    seo: {
      title: 'Rustic Fresh Car | Zahradnictví u Juliuse',
      description: 'Nemo alias sit et saepe ut quis totam vero quis.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Tasty Concrete Soap',
    slug: 'Tasty-Concrete-Soap',
    shortDesc: 'Voluptatem distinctio et ipsa sit sunt nesciunt.',
    description:
      'Voluptatum veniam culpa ut accusamus aperiam. Possimus et non molestias occaecati perspiciatis rerum vel illo odit. Vel quibusdam minima asperiores ipsa consequatur omnis nostrum. Aliquam dolores eum nam corrupti dolor qui ipsum voluptatem debitis. In sint dolorum facere qui earum laboriosam error sapiente sunt. Aut aperiam vel officia earum deleniti eum asperiores doloribus dicta.\n \rHarum dignissimos praesentium perspiciatis laboriosam voluptatem non veniam. Rerum animi nesciunt nihil. Sint accusamus saepe illo minima dolores dolorem sit vitae sit.\n \rPariatur quod provident ut voluptatem. Labore iure inventore. Non consequatur odit.\n \rReiciendis repellendus eveniet quasi porro est non est ipsam. Iste est explicabo autem suscipit quo et excepturi. Odio facilis reiciendis eveniet. Eos qui excepturi beatae accusamus fuga enim. Voluptatem maxime veniam quos error. Et corrupti et cumque ab amet mollitia consequatur ad.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 419,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 41 },
    seo: {
      title: 'Tasty Concrete Soap | Zahradnictví u Juliuse',
      description: 'Voluptatem distinctio et ipsa sit sunt nesciunt.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Gorgeous Concrete Car',
    slug: 'Gorgeous-Concrete-Car',
    shortDesc: 'Deserunt reiciendis quos aliquid molestiae tempore.',
    description:
      'Hic at ut qui temporibus est modi. Odio et rerum eligendi dolorum sint eos aut dignissimos eos. Et enim dicta labore qui earum consequatur itaque. Dolor exercitationem vitae voluptatem repellat non enim fuga. Ex ut natus.\n \rEnim officiis placeat architecto officia a error nemo. Quia soluta voluptas ea consequatur. Voluptatum aut quis sit non voluptatum in delectus in est.\n \rOdio dolorem necessitatibus ratione. Aut tempore qui vero asperiores necessitatibus nobis corrupti. Doloremque in enim delectus iure accusantium praesentium dolore est. Non nesciunt laborum deleniti provident. Quibusdam adipisci assumenda reiciendis voluptas ea incidunt recusandae neque. Eaque aut ullam veritatis aspernatur dolorem sunt cum doloribus.\n \rQuia atque facere aut. Laboriosam necessitatibus qui. Similique est minima qui accusantium.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 24 },
    seo: {
      title: 'Gorgeous Concrete Car | Zahradnictví u Juliuse',
      description: 'Deserunt reiciendis quos aliquid molestiae tempore.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Licensed Granite Tuna',
    slug: 'Licensed-Granite-Tuna',
    shortDesc: 'Impedit labore incidunt nisi.',
    description:
      'Voluptas voluptates magni velit animi. Aut error eligendi. Et quod harum et aliquid explicabo sunt. Maxime alias quia quas. Iure veniam tenetur quas sint cum distinctio. Aliquid quis error rerum.\n \rUt nesciunt et delectus est autem dignissimos. Nobis hic iure exercitationem recusandae consectetur. Ea amet necessitatibus officia id vitae quis voluptatem. Voluptatem rerum exercitationem aut delectus.\n \rRepellendus vero accusantium quo vero dolore qui ipsum sint provident. Aut veniam impedit adipisci architecto nihil aut ea et. Exercitationem quaerat dolorum inventore fugit nam delectus fuga. Ipsum quibusdam labore aut porro.\n \rSaepe natus ipsum aperiam harum nisi tenetur illum. Nobis error odio consequuntur sit ut quis non consectetur cumque. Amet deserunt et ex sint. Vel iure unde fugiat labore nostrum voluptas possimus. Et repellendus vitae. Autem quia voluptatibus sit magnam deleniti nostrum earum.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 439,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 18 },
    seo: {
      title: 'Licensed Granite Tuna | Zahradnictví u Juliuse',
      description: 'Impedit labore incidunt nisi.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Steel Table',
    slug: 'Gorgeous-Steel-Table',
    shortDesc: 'Eius ut aliquam omnis quo optio ut consequatur beatae.',
    description:
      'Fuga qui non sint sed distinctio quam. Placeat necessitatibus nam sunt et ut cum molestias laborum aut. Voluptates illum molestias sequi quidem. Nisi nesciunt reiciendis quidem eveniet error dolores magnam. Optio occaecati delectus aperiam eum qui voluptas consequatur ut sint. Consequatur voluptatem voluptatem eveniet.\n \rEst ipsum amet nam hic odio ab. Aspernatur est assumenda quo et tempora earum natus. Dolorem reiciendis iure vel veritatis quod eos inventore. Cum modi molestias minus molestiae ut molestiae facere quia exercitationem.\n \rNihil doloribus est delectus repellendus et. Voluptatem aliquam sequi illum recusandae voluptatum sint asperiores voluptas totam. Aut fugit ducimus natus velit. Consequuntur ullam qui ipsa numquam rerum ab.\n \rConsequatur nihil sequi sed voluptatibus voluptates inventore at ipsum. Laudantium vero explicabo et. Provident ut aut aperiam aliquam consectetur minima culpa quis minus. Accusamus quas repellat illo quia dolore quasi.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 39,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 77 },
    seo: {
      title: 'Gorgeous Steel Table | Zahradnictví u Juliuse',
      description: 'Eius ut aliquam omnis quo optio ut consequatur beatae.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Soft Hat',
    slug: 'Rustic-Soft-Hat',
    shortDesc: 'In ut ea aperiam.',
    description:
      'Esse qui voluptatem et labore placeat voluptas sit. Ut excepturi ab voluptatibus hic vel. Libero et at veniam. Nisi omnis earum quidem.\n \rIpsa similique sit veniam et est architecto et facilis ut. Nam omnis ipsa sit. Ex aut deleniti consequuntur ea tenetur minus explicabo.\n \rLaudantium deleniti molestias ipsa quia nostrum. Perspiciatis autem tempore vel ut. Tempora accusamus impedit reiciendis non suscipit culpa. Ex sapiente non nemo omnis asperiores aspernatur impedit nihil omnis.\n \rCupiditate voluptatibus similique ut esse id. Aut nemo autem aut laudantium quia dicta. Dolorem quia et sint nesciunt quam id omnis voluptatem sed.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 599,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 85 },
    seo: {
      title: 'Rustic Soft Hat | Zahradnictví u Juliuse',
      description: 'In ut ea aperiam.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fantastic Cotton Mouse',
    slug: 'Fantastic-Cotton-Mouse',
    shortDesc: 'Numquam suscipit quidem quos atque assumenda autem.',
    description:
      'Quasi sequi eum facilis aut cupiditate porro. Tempora libero fugiat necessitatibus quisquam in consequuntur. Ut asperiores qui eum harum laboriosam quisquam. Eum vitae vel autem deserunt dolorum molestiae tempore architecto quaerat. Veniam nisi maiores similique consequuntur in sequi quod soluta. Sapiente totam quia ad soluta consequuntur similique dolorum.\n \rDebitis dolore qui qui recusandae blanditiis. Qui ex suscipit mollitia odit autem esse odio cumque. Eligendi vero quia rerum et voluptates aperiam aliquid est. Autem et eos.\n \rEaque quaerat velit et soluta voluptas dolorum consequatur. Ut sapiente et suscipit. Molestias natus deserunt non in perspiciatis culpa accusantium. Quas voluptatem expedita rerum eum ut ipsa officia earum et. Iusto deleniti ut.\n \rEum nobis at qui ratione esse molestiae enim et quia. Quia iusto sequi perspiciatis quis qui nihil qui enim. Sit accusantium ex molestiae nihil natus. Iure corrupti laudantium consectetur incidunt quasi. Et delectus eius impedit tempore voluptatibus occaecati animi.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 119,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 99 },
    seo: {
      title: 'Fantastic Cotton Mouse | Zahradnictví u Juliuse',
      description: 'Numquam suscipit quidem quos atque assumenda autem.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Rustic Granite Chair',
    slug: 'Rustic-Granite-Chair',
    shortDesc: 'Explicabo aut aut facere et esse asperiores vero qui dolor.',
    description:
      'Quam est fugit ex cupiditate rerum qui impedit hic. Ea architecto inventore eum iure. Excepturi dolorem nam natus saepe voluptatem. Nihil est sapiente eius dolorum. Aspernatur atque dignissimos delectus odio eaque et neque. Dolores commodi asperiores sint delectus.\n \rAnimi fugiat quia fugit incidunt quos natus. Tempore amet quos libero corporis commodi debitis dolor. Illo veniam est ea ipsum iste praesentium quia sit. Voluptatem quas ut sit atque eveniet non. Architecto aut dolor inventore aut. Ullam aut non magni est.\n \rMagnam nostrum asperiores nesciunt nemo cumque quia natus eos. Pariatur facilis commodi cupiditate iusto. Minima et sunt quia laborum laborum voluptas.\n \rVoluptatem voluptas vero aut voluptate suscipit placeat molestiae. Saepe praesentium velit quis. Et ad error qui optio nihil voluptatem. Ut voluptatibus aut est necessitatibus dolorem amet laborum et.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 179,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 54 },
    seo: {
      title: 'Rustic Granite Chair | Zahradnictví u Juliuse',
      description:
        'Explicabo aut aut facere et esse asperiores vero qui dolor.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Unbranded Rubber Shoes',
    slug: 'Unbranded-Rubber-Shoes',
    shortDesc: 'Asperiores et enim repudiandae dolore.',
    description:
      'Qui perferendis facere et. Nostrum voluptate suscipit magnam illo non eum libero blanditiis doloribus. Et harum minima. Soluta porro dolores et ea. Repellendus minima ex doloremque voluptatibus explicabo.\n \rSimilique et illum. Ad aut animi voluptatibus qui consequatur. Nulla vero dicta itaque autem modi neque et.\n \rOfficiis ut consequatur dolorem quod est beatae est illum ducimus. Repudiandae tempore alias quis quidem. Dolorum at excepturi optio nobis saepe iure quis.\n \rEveniet quas perspiciatis quaerat ea voluptas quis provident perspiciatis iusto. Suscipit beatae sit nostrum nesciunt voluptas repellat aliquid aut illo. Molestiae placeat eligendi et dicta aut omnis consequatur odit minima. Cum omnis nam est quod dolorem reprehenderit praesentium occaecati quo.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 409,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 73 },
    seo: {
      title: 'Unbranded Rubber Shoes | Zahradnictví u Juliuse',
      description: 'Asperiores et enim repudiandae dolore.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Practical Concrete Bike',
    slug: 'Practical-Concrete-Bike',
    shortDesc: 'Ipsam eaque eligendi velit.',
    description:
      'In quam doloremque adipisci. Est asperiores sit quisquam minus expedita enim aliquam quia. Deleniti odit sint quis. Quod quaerat asperiores aliquam et aut harum. Officia reiciendis minus ut debitis fugiat adipisci expedita dignissimos tenetur. Eos non voluptatem.\n \rHarum dolor dolorum sequi ea eius aut. Pariatur ut perferendis necessitatibus amet occaecati. At vel ea cupiditate aut voluptas sapiente quod. Voluptates qui et quisquam consequatur molestiae aperiam blanditiis.\n \rCommodi facere ipsa enim sunt eveniet quasi sapiente et facere. Ea animi doloribus dolor illum dolore neque sit. Aut aut sunt et et sapiente.\n \rTenetur ea et sed quia omnis saepe. Officiis nisi quos corrupti nesciunt sunt nobis officia adipisci est. Inventore beatae dolores et quae voluptas consequatur. In labore id.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 38 },
    seo: {
      title: 'Practical Concrete Bike | Zahradnictví u Juliuse',
      description: 'Ipsam eaque eligendi velit.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Practical Plastic Shirt',
    slug: 'Practical-Plastic-Shirt',
    shortDesc: 'Voluptates est qui repudiandae ea velit est.',
    description:
      'Tempore quas ipsa qui quam quis odio at. Expedita rerum reiciendis ipsam doloribus deserunt harum ea cupiditate. Quia est aut praesentium eius vero iste et consectetur in.\n \rEst voluptatum quidem veniam. Officiis nihil quis vel. Accusamus necessitatibus ipsum et dolor est debitis voluptatem nihil.\n \rVelit omnis et maiores vel est et. Possimus placeat nisi. Ab culpa animi adipisci esse iste ut. Praesentium dolor magnam eum id.\n \rQuia et similique velit est magnam illum. Consequatur dolore in molestias corporis autem repellat consequatur. Eaque praesentium quis quod velit magni ea. Beatae nisi veritatis eos pariatur et natus quo veritatis eius. A aspernatur aliquid optio doloremque.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 489,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 4 },
    seo: {
      title: 'Practical Plastic Shirt | Zahradnictví u Juliuse',
      description: 'Voluptates est qui repudiandae ea velit est.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Ergonomic Cotton Hat',
    slug: 'Ergonomic-Cotton-Hat',
    shortDesc: 'Consequatur iure nihil sunt.',
    description:
      'Labore nihil quibusdam et est. Et aliquid et et. Ea perferendis reiciendis eius ut in eius error aut quisquam. Porro ipsum et eum a dolores nostrum aut. Asperiores reprehenderit sit harum et.\n \rQuia similique sed aut aspernatur non ipsam cumque reiciendis. Est enim soluta voluptates laboriosam consequuntur. Id unde iure voluptas qui modi dolor cum et. Exercitationem molestiae iusto sint eius qui quis.\n \rDelectus molestiae eum sed recusandae. Corrupti voluptas consequatur et voluptas recusandae officia. Consequatur aliquid voluptas ducimus beatae est.\n \rAutem quo debitis vitae. Explicabo esse quaerat qui qui ut culpa sint officia. Quis nemo voluptatum cumque rerum. Aliquid consequatur ea repudiandae dolor. Dignissimos consequatur tempore beatae facilis dolorum porro asperiores provident. Iure aliquid natus est omnis omnis exercitationem.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 249,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 37 },
    seo: {
      title: 'Ergonomic Cotton Hat | Zahradnictví u Juliuse',
      description: 'Consequatur iure nihil sunt.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Fresh Car',
    slug: 'Gorgeous-Fresh-Car',
    shortDesc: 'Ex veniam quis non assumenda et natus.',
    description:
      'Tempora magnam atque. Incidunt velit tempora laborum alias incidunt velit impedit. Ullam in id non et nobis. Cum autem fugiat sunt.\n \rAsperiores fuga cum molestias maxime ea veritatis saepe architecto est. Eligendi nihil consequatur quia ullam et aut at ut. Corrupti iste quia dicta possimus dolor aut voluptas excepturi voluptas. Rem aliquid nisi corrupti ipsa veritatis quam. Sapiente asperiores rem voluptatem incidunt recusandae consequatur vel. Cum dolorem sint quia tenetur et eos quia incidunt.\n \rVoluptas iure nisi modi rem et. Quis qui et natus commodi est deleniti sit. Et et aliquam facere laborum. Nihil quia sed voluptates aliquam necessitatibus doloribus facere suscipit molestias. Et laudantium dolores sed ipsa cum fugiat.\n \rMinima aperiam aut est cupiditate eos molestiae perspiciatis iste impedit. Ut deleniti voluptatum. Sequi dolor quibusdam error voluptatem.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 439,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 24 },
    seo: {
      title: 'Gorgeous Fresh Car | Zahradnictví u Juliuse',
      description: 'Ex veniam quis non assumenda et natus.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Unbranded Cotton Chips',
    slug: 'Unbranded-Cotton-Chips',
    shortDesc: 'Voluptatem et sint.',
    description:
      'Id iste tempora ut similique tenetur et. Sit est molestiae veritatis nihil amet pariatur vero ipsam hic. Aut aliquam magnam itaque vero. Aspernatur vel ab ea ea sunt ipsam vero voluptates voluptates. Quo consequatur et id rerum. Et soluta non autem exercitationem similique quibusdam.\n \rNon aut veniam consequuntur ipsam. Animi dolorem eaque delectus. Exercitationem cumque ut et. Eum error et et et quam dolor.\n \rNihil aspernatur quas est. Quis doloremque provident tempora. Voluptatem molestiae aut incidunt praesentium neque omnis.\n \rVoluptate fugit rerum pariatur sed maxime facere facere. Accusantium nemo quod quia incidunt. Ab quia in. Molestias suscipit totam iure quidem nemo harum incidunt quia quis.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 13 },
    seo: {
      title: 'Unbranded Cotton Chips | Zahradnictví u Juliuse',
      description: 'Voluptatem et sint.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Ergonomic Metal Towels',
    slug: 'Ergonomic-Metal-Towels',
    shortDesc:
      'Labore et temporibus perferendis qui odit voluptatem iusto saepe omnis.',
    description:
      'Et iure quod. Rerum sed animi at incidunt. Et quas quas qui sed.\n \rSit id nihil alias tempora velit. Nesciunt quo quis voluptate iste. Maiores occaecati corporis minus voluptates quas quod. Pariatur unde labore quae et.\n \rVel incidunt illum quo. Et ipsa nesciunt non sequi amet. Et provident maxime quo totam ut non ut.\n \rNisi ipsum maiores mollitia necessitatibus. Reiciendis odit voluptas quidem rerum natus. Ullam rem consequuntur laudantium dolor. Quia quo qui non ipsa quo vitae repellat. Iure id cum dolor unde quia eaque reprehenderit.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 189,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 21 },
    seo: {
      title: 'Ergonomic Metal Towels | Zahradnictví u Juliuse',
      description:
        'Labore et temporibus perferendis qui odit voluptatem iusto saepe omnis.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Concrete Fish',
    slug: 'Gorgeous-Concrete-Fish',
    shortDesc: 'Ad rerum voluptatem minus iusto soluta.',
    description:
      'Deserunt velit nemo accusamus sint ea. Facilis sit ut non vero in enim labore aut. Et inventore minus ipsa expedita nesciunt quia repellendus. Quam doloremque voluptate placeat officiis. Laudantium dolores enim accusantium enim odio. Vero reiciendis ut facere debitis modi.\n \rIllo ex dolorem consequatur ea et omnis. Aut aut quo soluta ut error facilis quisquam odit. Cupiditate vero molestiae. Dolores quos voluptates.\n \rAut atque nulla aliquid provident quo accusantium culpa. Rem dolorem reiciendis. Necessitatibus error pariatur suscipit enim vitae impedit dolorem eveniet necessitatibus. Ut quos inventore earum ipsam provident sunt et ullam.\n \rAtque dolorum est fuga aspernatur necessitatibus expedita iure. Consectetur quasi commodi consequuntur quasi ut similique. Accusamus quos officiis quasi in nisi a.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 89,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 10 },
    seo: {
      title: 'Gorgeous Concrete Fish | Zahradnictví u Juliuse',
      description: 'Ad rerum voluptatem minus iusto soluta.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Plastic Keyboard',
    slug: 'Rustic-Plastic-Keyboard',
    shortDesc: 'Nisi quia est.',
    description:
      'Architecto labore ea perferendis qui maiores sed est. Est similique fugit sequi magni asperiores ut esse. Iste aliquid dolorem nesciunt culpa iure. Minima maxime omnis quod pariatur corrupti quo ipsum magni. Est a ipsam commodi sed velit natus dolor tenetur. Tempora ea dolor vel totam fuga.\n \rFuga est vel explicabo vero nisi voluptate earum nulla. Nihil delectus pariatur fuga est. Optio suscipit et inventore et quisquam vel et et. Et ea fugiat tenetur explicabo necessitatibus.\n \rVoluptatem doloremque ut repellat. Et ea autem accusamus aperiam accusamus doloribus. Numquam quod unde repudiandae sed magni in unde non.\n \rSed facilis ut aut aperiam dolores nihil quasi totam. Non explicabo provident dolor alias. Eveniet modi est at. Velit dolores deserunt quis qui officiis vel earum suscipit non. Non libero sequi molestiae fugit ad pariatur quia hic dolores. Eos unde praesentium omnis.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 49,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 10 },
    seo: {
      title: 'Rustic Plastic Keyboard | Zahradnictví u Juliuse',
      description: 'Nisi quia est.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Refined Metal Chicken',
    slug: 'Refined-Metal-Chicken',
    shortDesc: 'Sit impedit in qui quia nihil dignissimos.',
    description:
      'A eligendi dolores. Cum aut omnis accusamus est quis possimus. Perspiciatis reprehenderit a minima cumque sequi assumenda a ullam recusandae. Et possimus minima sapiente quis. Aliquid repudiandae qui.\n \rConsectetur quia vel eos dolore et suscipit porro. Corporis saepe qui. Ex et expedita.\n \rVoluptates ipsam officiis ducimus. Cum deserunt asperiores. Dolores debitis id qui cupiditate omnis maiores vitae dicta laborum. Ea asperiores dolore neque eligendi excepturi.\n \rVoluptates esse corporis quidem consequatur quam. Doloremque voluptatem voluptatem et voluptatem sunt nihil. Sapiente non odit illo repellat sed rerum expedita omnis.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 73 },
    seo: {
      title: 'Refined Metal Chicken | Zahradnictví u Juliuse',
      description: 'Sit impedit in qui quia nihil dignissimos.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Wooden Tuna',
    slug: 'Tasty-Wooden-Tuna',
    shortDesc: 'Hic excepturi quas sunt perspiciatis.',
    description:
      'Illo accusamus natus harum nostrum et unde cupiditate. Tempore quam asperiores libero cumque ut. Aliquam hic blanditiis possimus.\n \rOccaecati cumque porro necessitatibus adipisci ex veritatis officia. Aut autem cupiditate totam. Nemo aut veritatis optio corrupti quasi id architecto provident maxime. Sed labore quis doloribus.\n \rDolores dignissimos pariatur labore eum corporis repellat cumque ipsum ipsam. Voluptates alias nihil assumenda beatae. Voluptatem aut corporis.\n \rModi temporibus vitae vel eum perspiciatis voluptatem aspernatur sed. Architecto ratione eveniet praesentium sit sed ullam quia aut. Veritatis et unde quis non dolorum.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 529,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 19 },
    seo: {
      title: 'Tasty Wooden Tuna | Zahradnictví u Juliuse',
      description: 'Hic excepturi quas sunt perspiciatis.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Refined Steel Gloves',
    slug: 'Refined-Steel-Gloves',
    shortDesc: 'Exercitationem aut atque eveniet asperiores iste iure.',
    description:
      'Ut voluptas illum ratione tenetur aliquam magnam a et beatae. Blanditiis occaecati dolores eum facilis accusamus qui. Quae quia non fugiat molestias voluptatibus ducimus. Qui in saepe perspiciatis dolor nihil praesentium hic.\n \rMolestiae voluptas et iure. Corporis libero consequatur. Tenetur ea deleniti aperiam maxime. Quia culpa voluptatem numquam corporis quidem et porro facere.\n \rFuga aut aut. Repellat laudantium modi eveniet repellendus eum. Libero ut est.\n \rAtque natus doloribus iure occaecati minus vel velit. Recusandae beatae libero alias ratione id neque cum earum. Molestiae consectetur quia illo ea voluptatem et dolores.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 149,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 5 },
    seo: {
      title: 'Refined Steel Gloves | Zahradnictví u Juliuse',
      description: 'Exercitationem aut atque eveniet asperiores iste iure.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Handmade Wooden Sausages',
    slug: 'Handmade-Wooden-Sausages',
    shortDesc: 'Ut minima perferendis et.',
    description:
      'Est ut itaque pariatur in sunt qui magni. Nemo deserunt eaque itaque aut. Iure et enim debitis eos distinctio quia deleniti. Et blanditiis distinctio esse est et eos a aut. Possimus culpa et id molestiae assumenda dolores minima.\n \rMinus pariatur aspernatur tenetur quae dolorem distinctio eum. Perspiciatis voluptatem molestiae at aperiam. Ipsum modi facere. Ratione omnis vitae ipsam voluptatum in ullam.\n \rAd et quibusdam vel aliquid recusandae qui vel itaque suscipit. Sint velit modi quod nostrum. Reiciendis totam minus dolorum voluptas eveniet suscipit sunt et quas. Architecto iste deleniti enim.\n \rMaiores omnis numquam et ducimus ex. Voluptatem quis molestiae magnam non sint non animi. Ut alias quam. Itaque excepturi assumenda ut ut sed. Eveniet ad iusto soluta blanditiis aliquam voluptas distinctio. Et ut velit sint nobis non eum vel.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 609,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Handmade Wooden Sausages | Zahradnictví u Juliuse',
      description: 'Ut minima perferendis et.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Awesome Plastic Mouse',
    slug: 'Awesome-Plastic-Mouse',
    shortDesc: 'Sed voluptatibus aliquid voluptas dolorem voluptas sequi qui.',
    description:
      'Vel impedit explicabo et cum repellat laborum. Labore consequuntur possimus quibusdam fugiat deleniti quaerat voluptatem id architecto. Dignissimos autem molestiae dolore vel.\n \rEt ut est. Qui placeat et laudantium laudantium dolores. Et tempora aut inventore.\n \rVoluptatem ut tempore. Est itaque aliquam enim rerum est cupiditate. Alias itaque et tempora.\n \rPraesentium est quaerat aut vel dolores itaque dolor. Est dolores exercitationem ad et explicabo eum quia id et. Optio cum deleniti voluptatem minima blanditiis sed omnis distinctio totam. Fuga culpa non iusto distinctio consequatur.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 119,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 7 },
    seo: {
      title: 'Awesome Plastic Mouse | Zahradnictví u Juliuse',
      description:
        'Sed voluptatibus aliquid voluptas dolorem voluptas sequi qui.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Refined Frozen Pants',
    slug: 'Refined-Frozen-Pants',
    shortDesc: 'Rerum nisi laudantium ea aut alias quis.',
    description:
      'Accusamus cum facilis et ut ut doloremque. Iusto et dolorem voluptas animi ex officia quaerat. Commodi at nostrum et est aut. Et sint earum vero enim libero sit ipsum ut sunt.\n \rCorrupti sunt possimus consequatur minima. Ipsam optio quo et. Est architecto voluptatem aut error et. Dolore occaecati accusamus fugiat qui dicta reprehenderit et officia. Ducimus molestiae nisi vero sapiente quo recusandae in. Explicabo rem rem culpa debitis ducimus architecto dolore aliquid.\n \rEt a aspernatur ducimus unde vel. Quaerat asperiores quam debitis. Dolores omnis nostrum temporibus dolores officiis placeat. Sunt perferendis id aperiam voluptatem dignissimos quo maiores quos. Magni et ut molestiae voluptatem odit. Magni debitis rerum corrupti neque ratione.\n \rAccusantium quibusdam rem impedit. Voluptatem maiores occaecati tempora velit est eius explicabo cum. Vero illum animi sunt qui distinctio numquam consequatur veniam sit.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 549,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 11 },
    seo: {
      title: 'Refined Frozen Pants | Zahradnictví u Juliuse',
      description: 'Rerum nisi laudantium ea aut alias quis.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Wooden Shoes',
    slug: 'Rustic-Wooden-Shoes',
    shortDesc: 'Nemo facilis voluptatibus aut sit vel commodi delectus.',
    description:
      'Quisquam itaque qui provident est rerum. Quidem nam dicta nihil hic nobis quos. Aut praesentium consequatur repellat consequatur eum qui est rerum. Sit et sed maxime. Veniam cumque odio.\n \rCum autem quia dicta autem vero numquam quo consectetur enim. Repudiandae enim sit vel blanditiis quibusdam provident. Quia quis eos necessitatibus est sed ipsum. Vero quo officiis molestias corrupti doloribus nostrum deleniti minus. Autem iusto distinctio saepe. Corporis fugiat illo in consequatur consequatur.\n \rExercitationem nemo omnis quasi voluptatem reiciendis non voluptatum. Animi qui necessitatibus repellendus molestias minima error blanditiis perferendis iste. Aliquam et a in dolores debitis ea dignissimos. Quae asperiores voluptate velit distinctio maxime accusantium repudiandae quibusdam. Velit illo eum hic dicta iste recusandae. Aliquam dolor ea corporis impedit eligendi alias earum nulla.\n \rOdio aut autem sed doloremque quia et ut. Ut repudiandae reprehenderit eum molestiae numquam minima distinctio. Consequuntur sit tempore illum consequatur optio eum vel ullam aliquid.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 39,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Rustic Wooden Shoes | Zahradnictví u Juliuse',
      description: 'Nemo facilis voluptatibus aut sit vel commodi delectus.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Cotton Table',
    slug: 'Incredible-Cotton-Table',
    shortDesc: 'Pariatur veniam dolores.',
    description:
      'Qui dolores alias nulla. Ea voluptate provident veritatis aut non omnis aut consequatur fugit. Veniam magni facilis velit debitis corrupti qui praesentium quia. Unde et soluta eum accusamus et.\n \rQuia vel blanditiis est voluptas voluptates laudantium quisquam delectus. Et adipisci dolor ea deleniti et dicta est. Et vitae alias distinctio quia suscipit in.\n \rAperiam assumenda architecto. Eaque ad dolorem alias. Est veniam ullam recusandae fugiat earum quia iure sed nobis. Reiciendis voluptatem laborum unde laborum sed. Nihil illo architecto aliquid esse debitis.\n \rVoluptas quis ut sit quod aliquid quia. Sit voluptas voluptas laudantium et dolorem et ut sed voluptas. Quia qui voluptates earum illo qui repudiandae aut quia. Fugit sed aliquid odit tempora omnis molestiae aut quidem. Delectus aut iusto delectus magni eveniet facere est amet.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 609,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 50 },
    seo: {
      title: 'Incredible Cotton Table | Zahradnictví u Juliuse',
      description: 'Pariatur veniam dolores.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Rustic Soft Car',
    slug: 'Rustic-Soft-Car',
    shortDesc: 'Saepe qui magnam eaque sequi.',
    description:
      'Dignissimos et qui eveniet quae in et voluptatem inventore. In eligendi consequatur mollitia consectetur ut aut voluptatum dolorum vel. Odit nam quibusdam aut hic. Ducimus debitis sit aspernatur quis. Dolore velit eveniet corrupti debitis qui culpa fuga voluptatem et. Velit ipsum delectus non quidem.\n \rIllum et quod mollitia asperiores cupiditate aspernatur. Illum rem ea quis ducimus aut omnis. Consectetur excepturi nemo voluptatem qui aut et vel soluta. Excepturi quia delectus. Voluptates vero aspernatur quia magni.\n \rId earum voluptatem temporibus. Quis error dolorum laudantium. Optio similique ut alias iure ut aut. Eos consequatur et a minima beatae ad. Nostrum qui ad. Fugiat sint repellendus.\n \rModi ut tempora eum sapiente sapiente. Sunt ea nostrum tempora animi officia eum. Enim error dicta exercitationem. Et sit recusandae mollitia debitis rerum omnis et. Quia aliquam numquam culpa laborum dolore ullam veniam eum.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 329,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 86 },
    seo: {
      title: 'Rustic Soft Car | Zahradnictví u Juliuse',
      description: 'Saepe qui magnam eaque sequi.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Awesome Fresh Pizza',
    slug: 'Awesome-Fresh-Pizza',
    shortDesc: 'Exercitationem odit voluptate quod nam vel.',
    description:
      'Aperiam voluptatem asperiores et doloribus quibusdam. Fugiat cum quia. Assumenda enim quo consequatur impedit natus quibusdam quibusdam magnam omnis. Inventore magni nesciunt est odit et. Amet id in sit omnis ipsum. Voluptatem nulla fugit ipsa aut voluptas non.\n \rHic iste non accusantium consequuntur et ut nihil nemo. Minima consequatur nostrum eum cum neque. Aspernatur veritatis facere dolor beatae. Vero quas in qui et eum ex fugiat.\n \rAut id odit consequatur laudantium. Rerum voluptatibus eum sed temporibus autem. Quam sit ut minus nesciunt ea sint est qui.\n \rQui facere perspiciatis molestiae alias. Enim harum eveniet dolores et quidem accusantium. Eius et consequatur architecto in. Quisquam non nihil quis.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 279,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 70 },
    seo: {
      title: 'Awesome Fresh Pizza | Zahradnictví u Juliuse',
      description: 'Exercitationem odit voluptate quod nam vel.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fantastic Fresh Soap',
    slug: 'Fantastic-Fresh-Soap',
    shortDesc:
      'Distinctio omnis dolores nobis aperiam dolorem molestias molestiae autem.',
    description:
      'Exercitationem quia et eius distinctio quibusdam. Minus facere repellendus. Sunt repudiandae dolor ipsum veniam fugiat aliquam. Sunt dolor quibusdam praesentium est aliquid.\n \rAccusantium accusamus alias reprehenderit. Aliquid quasi sint nesciunt aliquam quae. Perspiciatis omnis beatae dolorum ut. Ea at deleniti in similique nemo molestias error ratione. Voluptatum consequuntur maiores molestiae qui et dolores.\n \rQuia architecto facere. Quasi quia consequatur ratione assumenda et eos beatae. Qui reprehenderit aut reiciendis earum architecto id ab architecto consequuntur. Excepturi quis nobis incidunt assumenda unde alias voluptatem et.\n \rEum velit eligendi necessitatibus recusandae et saepe unde fuga nulla. Assumenda atque nemo. Accusamus illo eum nam. Aut ut qui eligendi sed laboriosam ut. Ipsa distinctio id temporibus. Corrupti quia vel aperiam ut similique debitis distinctio.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 449,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 25 },
    seo: {
      title: 'Fantastic Fresh Soap | Zahradnictví u Juliuse',
      description:
        'Distinctio omnis dolores nobis aperiam dolorem molestias molestiae autem.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Sleek Fresh Hat',
    slug: 'Sleek-Fresh-Hat',
    shortDesc: 'Eum voluptas earum exercitationem eveniet nihil.',
    description:
      'Fugiat dolores inventore beatae quo qui aut ut sed. Laboriosam animi qui sit omnis enim a delectus doloribus. Debitis sit cum itaque vel eum non. Magni magnam qui sapiente non pariatur saepe possimus placeat.\n \rNumquam itaque qui vel quo eius. Corporis error numquam. Et et fugiat distinctio dolore adipisci error facere non neque. Voluptate et non aut voluptates consequuntur est sed omnis.\n \rQuam voluptatem facere cum illum et molestiae rerum fugit. Voluptates nulla et eaque illum. Labore est veritatis sed aliquid qui voluptatum.\n \rCulpa sit eligendi eum. Ut aliquid ratione iste animi. Eos reprehenderit veritatis temporibus non. Consequatur tempore libero quibusdam velit quos quisquam maxime quia. Ab cum itaque officia tenetur ut alias alias. Voluptatem accusantium excepturi tempora vero maxime ex expedita quo excepturi.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 169,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 87 },
    seo: {
      title: 'Sleek Fresh Hat | Zahradnictví u Juliuse',
      description: 'Eum voluptas earum exercitationem eveniet nihil.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Refined Granite Fish',
    slug: 'Refined-Granite-Fish',
    shortDesc: 'Optio vel in non aut.',
    description:
      'Voluptas illum voluptatem explicabo dolore. Nihil expedita et reprehenderit rem sunt suscipit odio. Error est ullam totam corporis est eligendi rerum. Similique omnis repudiandae in rerum architecto enim esse.\n \rSint assumenda ut doloribus earum labore autem et quis animi. Et labore voluptas necessitatibus omnis corporis ducimus voluptatem enim. Enim doloremque et velit cum.\n \rEst est dolores qui aliquam minima molestias et ipsum ea. Cumque sunt earum. Ea minus nihil et tempora.\n \rCum voluptatum aperiam ipsum aliquam voluptatibus consequuntur delectus itaque tenetur. Deserunt laudantium velit qui nobis officiis et unde ut. Consequatur et vel. Porro eius et cum est ratione fuga. Fugiat veritatis omnis officia sapiente possimus quae dolor consequatur dolore.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 229,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 91 },
    seo: {
      title: 'Refined Granite Fish | Zahradnictví u Juliuse',
      description: 'Optio vel in non aut.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Intelligent Wooden Chicken',
    slug: 'Intelligent-Wooden-Chicken',
    shortDesc: 'Ab a nesciunt cumque omnis ut.',
    description:
      'Magni ea sunt eos adipisci perspiciatis. Itaque voluptatem eum. Illum eos sunt. Exercitationem dolores veritatis veniam necessitatibus.\n \rEos quibusdam vel nihil rerum minus tempore fugit. Architecto est incidunt recusandae corrupti sequi. Reiciendis fugiat enim aut quia amet minima molestiae.\n \rVoluptates non consequatur fugiat qui ad dolorem totam ut. Quibusdam blanditiis nihil aut. Id explicabo nihil rerum aut.\n \rVelit voluptate et ut tenetur quia. Quia quod minima et vel non fugit. Doloribus illo pariatur esse atque sed magni beatae. Voluptas provident adipisci eaque consequatur quaerat molestias consectetur.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 369,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 16 },
    seo: {
      title: 'Intelligent Wooden Chicken | Zahradnictví u Juliuse',
      description: 'Ab a nesciunt cumque omnis ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Incredible Metal Chips',
    slug: 'Incredible-Metal-Chips',
    shortDesc: 'Quo tempore distinctio qui eum voluptate ea vel quas.',
    description:
      'Rem velit ullam. Vero sed qui molestias. Et omnis eos illo facilis est quos dolorum sit. Nihil dolor quo eius sit vel molestiae itaque aliquid. Maiores sint modi.\n \rSunt rerum consequatur iure aut ex quis quia natus. Hic qui qui voluptatem dolor dicta facilis. Facilis vel dolores. Doloremque et atque magni aut voluptate. Reiciendis voluptas sed cupiditate corporis ipsum molestiae. Laborum aut id dolor assumenda voluptatibus.\n \rNam voluptatem voluptas magni. Possimus qui earum. Illo aut quis qui quod. Error rerum provident rem quam in velit sit eos sed. Nulla cum odit dolore qui facilis eius.\n \rExplicabo asperiores ex et vitae voluptatem enim veniam quisquam. Dolores enim facilis a earum. Earum iusto dolores impedit voluptatem ex et aut dignissimos numquam.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 109,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 22 },
    seo: {
      title: 'Incredible Metal Chips | Zahradnictví u Juliuse',
      description: 'Quo tempore distinctio qui eum voluptate ea vel quas.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Fantastic Steel Chicken',
    slug: 'Fantastic-Steel-Chicken',
    shortDesc: 'Alias porro et consectetur et temporibus voluptate laboriosam.',
    description:
      'Omnis qui aut dignissimos et quo beatae quos ipsum. Inventore quaerat consequatur sed asperiores aut nam ex. Non sint optio veritatis neque. Ut id consequuntur deserunt. Ex eligendi perferendis explicabo voluptate blanditiis voluptas qui quia mollitia.\n \rRepellendus et id est. Aut eligendi iure ex. Debitis repellat autem a ab. Velit totam ut quam accusamus itaque distinctio vel non.\n \rVelit quia aut et exercitationem rerum dolorem. Explicabo blanditiis nihil similique et et quos. Adipisci nostrum tenetur odit ex et. Et molestiae tempore sunt. Id perspiciatis quis. Est aut ut similique dolorem sit doloremque.\n \rFugit vero ut distinctio maiores ut. Aut sed commodi voluptas id sed facere culpa. Sunt nihil at laudantium id et eaque. At minima odio earum culpa facere occaecati delectus. Reiciendis architecto voluptas velit minus.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 519,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 13 },
    seo: {
      title: 'Fantastic Steel Chicken | Zahradnictví u Juliuse',
      description:
        'Alias porro et consectetur et temporibus voluptate laboriosam.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Fantastic Rubber Pizza',
    slug: 'Fantastic-Rubber-Pizza',
    shortDesc: 'Aut qui sed inventore.',
    description:
      'Accusantium nam sit dolorem. Mollitia consequatur est veritatis voluptatem optio pariatur. Ab iusto saepe id sed recusandae. Quia tempora placeat nesciunt magnam in harum maiores nihil eos. Qui architecto exercitationem officiis perferendis rerum quis nam vel voluptates.\n \rAspernatur expedita velit nemo quibusdam autem consequatur quia. Non atque quis soluta dolore sit amet excepturi eius. Deleniti enim quo. Tempora architecto dolor est mollitia laborum vitae mollitia. Labore voluptatem exercitationem. Accusantium occaecati assumenda harum ex eaque eligendi.\n \rFugit voluptas placeat eos ullam odio omnis sit cumque. At consequatur debitis quasi et qui voluptatibus nihil animi. Expedita enim illum eligendi quisquam quo. Ullam aperiam dolorum nobis. Placeat et dolor voluptates dolorem sed quae. Sed asperiores amet voluptatem omnis quo suscipit.\n \rEst possimus voluptatem sapiente modi et sit laborum. Ratione qui ut vero at. Exercitationem aut rerum enim et eaque earum iure. Voluptate possimus nam quibusdam laborum dolor sed ullam. Eaque voluptas sint sapiente dolorum commodi. Est repudiandae aut qui unde.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 41 },
    seo: {
      title: 'Fantastic Rubber Pizza | Zahradnictví u Juliuse',
      description: 'Aut qui sed inventore.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Intelligent Steel Hat',
    slug: 'Intelligent-Steel-Hat',
    shortDesc: 'Non suscipit perspiciatis quas est qui quia perferendis.',
    description:
      'Quidem quae et corrupti deleniti deserunt mollitia quam. Earum sint ad et dolores dolor magni harum. Ducimus dolor corporis et doloremque cumque. Hic repellendus vel est non exercitationem eveniet id eius. Eos voluptate sed molestias.\n \rIllo sit iusto hic ullam eveniet vel et impedit. Reprehenderit aut mollitia numquam nam. Et nobis eaque distinctio enim non dolores provident unde. Non blanditiis voluptate est iure qui odio. Qui ut et tempore soluta reprehenderit qui et eaque nobis. Voluptates impedit accusamus at quidem sint nisi.\n \rIure aliquam assumenda sed atque. Neque sapiente molestiae error eos. Est et magnam perspiciatis. Ut nesciunt eius.\n \rConsequatur aliquid temporibus. Voluptate iusto quo voluptate. Voluptatem voluptatem et id deleniti vero ducimus placeat. Labore ullam qui.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 90 },
    seo: {
      title: 'Intelligent Steel Hat | Zahradnictví u Juliuse',
      description: 'Non suscipit perspiciatis quas est qui quia perferendis.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Awesome Fresh Chips',
    slug: 'Awesome-Fresh-Chips',
    shortDesc:
      'Aut laudantium cum repellendus ut eum sed assumenda doloremque suscipit.',
    description:
      'Deleniti voluptate earum ratione natus. Consequuntur numquam architecto rerum omnis temporibus et eum et qui. Distinctio suscipit asperiores.\n \rNostrum esse nobis odit repellat maiores quaerat quia aperiam. Sequi repellendus eum maiores iusto sint inventore. Sed et dolorem est hic aut eos autem aliquam. Cum expedita sequi consequatur accusamus eos veritatis officiis maxime voluptatem.\n \rDolor necessitatibus possimus aspernatur dolorum minus distinctio ipsa. Porro voluptatem ut a quo quas et voluptatem cupiditate. Ex quia eaque quod.\n \rAssumenda voluptas expedita et dignissimos eos animi aut commodi. Ut qui est quam perspiciatis quam dolorum quod. Sed minima aut atque et iusto. Et voluptatum sit iste consequuntur labore laudantium consequatur. Incidunt architecto qui dolores dolores a et aut. Voluptatem deserunt eos in consequatur aperiam voluptatem est facilis ut.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 169,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 98 },
    seo: {
      title: 'Awesome Fresh Chips | Zahradnictví u Juliuse',
      description:
        'Aut laudantium cum repellendus ut eum sed assumenda doloremque suscipit.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Small Cotton Fish',
    slug: 'Small-Cotton-Fish',
    shortDesc: 'Mollitia nesciunt voluptatem et.',
    description:
      'Illo mollitia ut quas voluptatem commodi maiores. Velit voluptatem et eius odio est enim qui ea consequatur. Voluptas architecto numquam culpa sit consequatur. Est sint ipsam quisquam. Reiciendis molestiae dicta sunt omnis fugit quas est fugit vel. Asperiores exercitationem rem velit.\n \rFacere officiis in accusamus quia alias aut architecto velit magnam. Omnis tenetur laudantium veritatis error aliquam excepturi. Natus earum sit sunt alias. Soluta incidunt dolores omnis modi velit ut fugit sit. Facilis ad qui consequatur sint totam et ad. Quia et in voluptas.\n \rEst cum saepe expedita. Porro quis perspiciatis eos natus facere voluptatem soluta magni. Consequatur sapiente quo soluta. Est delectus soluta veritatis in et aut quia sunt. Necessitatibus blanditiis qui consequatur quo blanditiis sed in.\n \rConsequatur ducimus illum facere fuga eum labore. Eius reprehenderit eligendi nisi consequatur assumenda quis dolore. Quia est omnis suscipit. Corporis molestias et aliquid omnis. Sit vitae ut sint est iure qui dolorum. Architecto velit animi et.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 539,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 62 },
    seo: {
      title: 'Small Cotton Fish | Zahradnictví u Juliuse',
      description: 'Mollitia nesciunt voluptatem et.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Gorgeous Granite Pants',
    slug: 'Gorgeous-Granite-Pants',
    shortDesc: 'Voluptatem qui earum voluptatem sint dolorem quia cupiditate.',
    description:
      'Perferendis rerum natus. Est eum quas dolore et. Voluptatem eligendi quod ipsam illum accusamus rerum labore ad et. Vero odit magni. Voluptate cumque harum veniam error sed quasi. Necessitatibus rerum quia mollitia aut.\n \rEa labore accusamus ipsum eos. Vel maxime quas omnis voluptas minus et. Tempora mollitia tempora qui aut. Et ipsa eos consequatur repudiandae atque ea consequatur modi. Consequatur dignissimos adipisci ut eum itaque voluptatum.\n \rVel veritatis aliquam ad voluptatibus nemo earum deleniti beatae eligendi. Qui ut fugit nihil unde voluptas est. Nihil sit expedita quidem eaque dolorem beatae sed.\n \rEnim fuga sed totam illum. Dolorem nostrum cumque vel ad. Dicta facilis reprehenderit consequatur quod consectetur. Exercitationem quis et eum sequi qui. Illum necessitatibus et ullam.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 95 },
    seo: {
      title: 'Gorgeous Granite Pants | Zahradnictví u Juliuse',
      description:
        'Voluptatem qui earum voluptatem sint dolorem quia cupiditate.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Fantastic Plastic Computer',
    slug: 'Fantastic-Plastic-Computer',
    shortDesc: 'Corporis magnam at.',
    description:
      'Eius deleniti quo explicabo. Laboriosam rerum voluptatem sunt voluptates. Voluptas fuga non optio assumenda. Consequuntur blanditiis minima earum nemo. Odit voluptatem iusto aut laboriosam nisi iste.\n \rEa consequatur odio aut et quidem et voluptas. Soluta explicabo saepe dolorum error nesciunt cumque unde nam officia. Iste explicabo odio repudiandae. Dicta laudantium ut voluptate molestiae nobis qui consectetur.\n \rNeque officiis sed est. Enim aut expedita et quidem. Ut et ut voluptas mollitia. Voluptas ut praesentium et est voluptates earum.\n \rLaboriosam recusandae aut facere commodi ipsum quod ea voluptatibus. Amet qui aut ut aut voluptates animi. Cum et quis voluptatem doloribus corrupti nostrum deleniti. Dolor cupiditate et voluptatem enim quibusdam officiis accusamus omnis. Soluta autem labore modi assumenda.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 10 },
    seo: {
      title: 'Fantastic Plastic Computer | Zahradnictví u Juliuse',
      description: 'Corporis magnam at.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Steel Mouse',
    slug: 'Gorgeous-Steel-Mouse',
    shortDesc: 'Mollitia soluta ut minus.',
    description:
      'Ab aut a vero non non sed. Non beatae sequi quidem ea voluptas minima quia minus. Doloribus esse et ut illum. Similique numquam libero sequi odio voluptatem et.\n \rEt laudantium nesciunt ullam blanditiis. Explicabo voluptatem aut esse aut accusamus. Accusamus voluptas rerum tempora aut. Vel quae distinctio culpa.\n \rLaborum et et vitae iure quidem sunt. Voluptas aut et et dolor debitis. Voluptas ut quo quidem qui. Quo illo deserunt aut ut quas aut placeat voluptas. Error ea quam cum maiores fugiat sit. Tenetur placeat qui culpa perspiciatis neque quia voluptatem velit ea.\n \rDolor aliquid aspernatur perspiciatis quos eos ut est. Sapiente accusamus quia dolorem quaerat illum. Totam quam sit illo est recusandae sunt sunt. Accusamus enim aut distinctio quam eos hic earum enim. Pariatur ut quas dolor autem ipsum.',
    category: {
      name: 'Trávy',
      slug: 'travy',
      background: 'https://api-dp-eshop.web.app/images/cat/trava.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    price: 209,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Gorgeous Steel Mouse | Zahradnictví u Juliuse',
      description: 'Mollitia soluta ut minus.',
      image:
        'https://api-dp-eshop.web.app/images/products/travy/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Metal Fish',
    slug: 'Practical-Metal-Fish',
    shortDesc: 'Aut non dolor rerum quasi qui laborum.',
    description:
      'Aliquam voluptatem quam earum et vel aut quidem est est. Eius et id error nesciunt tempore dolorum porro. Nulla doloremque iusto. Et fuga incidunt eaque ea aut atque soluta numquam.\n \rEt consequuntur at necessitatibus cumque consequatur vero voluptas recusandae rerum. Ut animi nisi consequuntur explicabo rerum distinctio sint et consequatur. Mollitia placeat quae iure non eos doloremque voluptate eligendi consequuntur.\n \rMagnam consectetur nemo ullam praesentium est consectetur nemo. Perferendis et illum. Voluptatum quis et.\n \rUt architecto praesentium. At qui corporis. Aperiam mollitia mollitia nulla libero facilis ea consectetur quod. Fuga cupiditate possimus dolore beatae voluptates dolore optio ratione maiores. Provident iusto voluptas. Deleniti quibusdam voluptatem soluta nostrum.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 359,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 56 },
    seo: {
      title: 'Practical Metal Fish | Zahradnictví u Juliuse',
      description: 'Aut non dolor rerum quasi qui laborum.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Awesome Metal Keyboard',
    slug: 'Awesome-Metal-Keyboard',
    shortDesc: 'Magni ipsum accusamus et voluptatem dolores vero et.',
    description:
      'Architecto amet necessitatibus. Libero iusto magnam est dolores qui quisquam nesciunt cum consequatur. Rerum autem et possimus. Consequatur enim aliquam et ab voluptas et quaerat. Iusto voluptate eum quia.\n \rSint corporis sit qui repellat eos consectetur eum placeat. Possimus laboriosam animi. Enim aperiam deleniti. Beatae et ab ex sint sed eveniet.\n \rItaque molestias et. Ex rerum enim quia aut. Ipsam quia ullam eum illum libero eaque.\n \rQui minus eum nulla. Fugit commodi itaque quod rem hic voluptatem laboriosam quia possimus. Voluptates doloremque omnis autem sit enim deserunt. Inventore qui debitis ipsam quia omnis unde magnam tempore debitis. Sint ut a numquam porro. Ea dolorum non nesciunt.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 72 },
    seo: {
      title: 'Awesome Metal Keyboard | Zahradnictví u Juliuse',
      description: 'Magni ipsum accusamus et voluptatem dolores vero et.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Intelligent Steel Sausages',
    slug: 'Intelligent-Steel-Sausages',
    shortDesc: 'Ut deleniti consequatur aut ut repudiandae aut omnis.',
    description:
      'Quia commodi culpa magnam dolorem hic temporibus aspernatur. Voluptatem minus odit itaque aliquam harum exercitationem et praesentium. Quos soluta quis sunt.\n \rInventore ipsam itaque aperiam facilis ipsa quia. Excepturi a sed unde adipisci iure eius molestias. Distinctio ad rerum corporis repellat dolores aliquid est inventore. Voluptatibus incidunt totam qui nesciunt suscipit. Praesentium explicabo consequatur.\n \rDoloremque sed provident et fugit. Eveniet explicabo maiores provident similique ratione quia non. Est ea id voluptatem hic quisquam. Eius numquam rerum. Eos veniam adipisci laudantium est magnam quia incidunt in. Omnis assumenda dolor quia ipsum qui iure nihil a.\n \rEt est voluptas ipsam. Nobis quo suscipit. Vitae est nihil ex hic et. Aliquam quo in.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 399,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 86 },
    seo: {
      title: 'Intelligent Steel Sausages | Zahradnictví u Juliuse',
      description: 'Ut deleniti consequatur aut ut repudiandae aut omnis.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Refined Concrete Gloves',
    slug: 'Refined-Concrete-Gloves',
    shortDesc: 'Asperiores mollitia ut veniam enim.',
    description:
      'Id voluptas enim iusto eligendi commodi facere illo dicta qui. Minima consequatur architecto aut et. Corrupti accusantium quasi quae laborum quia incidunt sit quasi ea. Autem porro ea. Et aliquid eum odit accusamus.\n \rQui dolorum nihil reiciendis cumque vero. Soluta assumenda maxime quam autem. Iusto aut temporibus nam cum assumenda dolor. Praesentium quisquam nemo aliquid repudiandae. Dolorem consequuntur ad consequatur. Modi totam qui itaque minus ipsum accusamus debitis repudiandae corrupti.\n \rOdio laboriosam distinctio fuga dignissimos possimus dolor placeat nihil. Adipisci ut dolores. Itaque et expedita.\n \rImpedit unde tempora ipsa possimus ullam et mollitia placeat. Esse illo quasi quis minus. Qui aut et sint harum accusamus est aut rerum ipsa. Quasi et ut quasi veniam nemo fuga praesentium fugiat. Cum et voluptatem numquam. At hic ea vel blanditiis.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 139,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 92 },
    seo: {
      title: 'Refined Concrete Gloves | Zahradnictví u Juliuse',
      description: 'Asperiores mollitia ut veniam enim.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Incredible Concrete Soap',
    slug: 'Incredible-Concrete-Soap',
    shortDesc: 'Enim perferendis voluptas ut rerum placeat nesciunt.',
    description:
      'Alias voluptatem nostrum dolor et ratione quia consequatur. Veritatis itaque enim inventore. Nisi et aut pariatur qui pariatur qui. Saepe ut impedit aliquam vero aut aut. Rerum aut recusandae ab. Ducimus laboriosam maxime dignissimos et magnam.\n \rQuo nesciunt inventore qui tenetur blanditiis id et. Id perferendis doloremque incidunt dolorem itaque. Rerum consequuntur harum dolore quibusdam error temporibus minima.\n \rA qui unde qui quas provident aut fuga illum sint. Dolore iure illum. Soluta eos possimus.\n \rEveniet occaecati ad qui inventore corrupti dolor sint. Culpa eligendi illo rem. Mollitia id magnam cumque labore qui est consequatur debitis. Voluptatem excepturi dolorem eius fuga quia cum. Sit dignissimos qui doloremque suscipit nulla delectus aut autem non.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 399,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 32 },
    seo: {
      title: 'Incredible Concrete Soap | Zahradnictví u Juliuse',
      description: 'Enim perferendis voluptas ut rerum placeat nesciunt.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Small Rubber Cheese',
    slug: 'Small-Rubber-Cheese',
    shortDesc:
      'Quas optio quos magni laudantium rerum ullam fugit dolore modi.',
    description:
      'Voluptas dignissimos rerum mollitia eos blanditiis numquam. Impedit aperiam nulla et rerum et eos voluptatum animi quaerat. Perspiciatis qui sed officiis voluptatem.\n \rFacere et sunt velit labore alias in. Commodi maiores omnis autem ipsa nulla corporis occaecati voluptatem minima. Sunt dolorum ea corrupti accusantium in voluptas praesentium quisquam.\n \rAut minus omnis atque possimus beatae architecto sint ut. Et sunt dignissimos autem qui aut. Perferendis non facilis quia quo nam.\n \rSed nemo in eum consequuntur cum vel corporis. Et et ea. Soluta quibusdam mollitia dolorem fuga eum quia nihil eaque velit. Saepe rem nihil iure aspernatur. Dolores dolorem ipsum voluptas veritatis eum. Asperiores sed ea officiis non quisquam.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 459,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 36 },
    seo: {
      title: 'Small Rubber Cheese | Zahradnictví u Juliuse',
      description:
        'Quas optio quos magni laudantium rerum ullam fugit dolore modi.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Refined Metal Soap',
    slug: 'Refined-Metal-Soap',
    shortDesc:
      'Sed consequatur vero sunt est voluptatum possimus ipsa ad nulla.',
    description:
      'Mollitia sunt non. Ut aut pariatur ut qui et recusandae nostrum tenetur dolorem. Aliquid minus accusantium et ipsum praesentium vero iure qui temporibus.\n \rQuia a sapiente ratione rerum saepe aut qui. Aut architecto aut repudiandae voluptas rerum qui maxime. Nam illo officiis quasi accusantium qui. Error voluptate aspernatur harum est tempore tempora quas excepturi facilis.\n \rEa praesentium hic. Iusto et ea sed quos ipsa itaque distinctio. Dolore corrupti dolor. Doloribus quis velit incidunt voluptate autem sint deleniti. Temporibus ut tempora impedit.\n \rAut veniam enim. Ipsam rerum debitis voluptatem omnis. Quod totam autem aut enim. Maiores perspiciatis tenetur nisi et.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 89,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 5 },
    seo: {
      title: 'Refined Metal Soap | Zahradnictví u Juliuse',
      description:
        'Sed consequatur vero sunt est voluptatum possimus ipsa ad nulla.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Sleek Wooden Hat',
    slug: 'Sleek-Wooden-Hat',
    shortDesc: 'Placeat consequatur quis minus enim quae autem et a.',
    description:
      'In cupiditate ratione vel. Sint velit incidunt voluptatibus sunt est debitis illum. Eum soluta et omnis. Repudiandae aspernatur commodi molestiae minima delectus molestiae. Qui rerum non commodi est dolor perspiciatis totam consequatur qui. Unde quis vitae omnis tempore.\n \rFacilis odio repellat. Molestias et a atque. Aut non voluptas libero odio. Iusto quia magni dicta. Sed eius accusantium odio labore eius iste. Dignissimos asperiores autem.\n \rOdit voluptatum occaecati qui error aut. Aliquid eum harum est nulla qui occaecati. Est ut iste fugiat perferendis saepe. Rerum aut earum sed qui veniam. Sint tenetur laudantium quis accusamus fugiat.\n \rQuaerat eaque soluta. Dolores nemo quia qui et a voluptates quae laudantium dignissimos. Et rerum et dolores eos vel deleniti iste numquam. Quia qui porro qui veniam vero voluptatibus.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 30 },
    seo: {
      title: 'Sleek Wooden Hat | Zahradnictví u Juliuse',
      description: 'Placeat consequatur quis minus enim quae autem et a.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Metal Sausages',
    slug: 'Rustic-Metal-Sausages',
    shortDesc: 'Dolores voluptas deserunt autem optio quis ratione.',
    description:
      'Laborum explicabo qui voluptatem enim asperiores. Modi consectetur eos laboriosam quos quis. Eius est omnis aut optio hic et eligendi. Maiores officia rerum. Quae perferendis et aut eius quasi similique in occaecati. Quia quia necessitatibus asperiores reprehenderit rem et voluptatem qui.\n \rSit adipisci voluptas ex aut exercitationem reprehenderit itaque architecto. Doloribus repudiandae consequatur sit laudantium repudiandae est et fuga est. Possimus qui qui sunt cupiditate est consequuntur voluptas repudiandae. Laboriosam laudantium illum et vel soluta ex ut. Dolores minima sed soluta commodi beatae cum. Minima omnis sit.\n \rNon ut consequatur repellendus. Sint et incidunt dolores error esse dolores. Est dolore dolorum molestias nemo velit incidunt veritatis. Laborum ut unde quibusdam nam odio occaecati. Similique in accusamus. Unde ea est excepturi qui possimus et dolorem facilis.\n \rDeleniti tenetur quia. Sunt impedit ad dolorem inventore voluptatem odit quam atque. Ut laudantium quam voluptatibus possimus quas molestiae aut.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 429,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 11 },
    seo: {
      title: 'Rustic Metal Sausages | Zahradnictví u Juliuse',
      description: 'Dolores voluptas deserunt autem optio quis ratione.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Rustic Plastic Pizza',
    slug: 'Rustic-Plastic-Pizza',
    shortDesc: 'Sed occaecati et.',
    description:
      'Necessitatibus saepe ad et et consectetur. Placeat voluptatem officiis unde nihil. Qui laboriosam velit quo laudantium sit non. Hic iusto et velit recusandae. Suscipit corporis non dolore. Enim laboriosam perspiciatis inventore laboriosam dicta doloremque minima amet cumque.\n \rPraesentium asperiores itaque reiciendis qui nemo placeat voluptatem reiciendis quibusdam. Adipisci optio expedita aliquam rerum voluptate quae. Autem sit molestias maxime. Porro sunt sapiente.\n \rOccaecati est ratione reiciendis dolores omnis ut earum quibusdam et. Nam reiciendis qui voluptatem vel qui vero. Et sit ut suscipit sit.\n \rOfficiis sapiente officiis quae vel a aperiam. Est accusamus enim iste molestias. Veniam et iure quas ut. Iste commodi sed doloremque tempore et. Ut quasi eveniet molestiae eum eius alias omnis et provident. Id et numquam molestias quod dolor dolores.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 189,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 61 },
    seo: {
      title: 'Rustic Plastic Pizza | Zahradnictví u Juliuse',
      description: 'Sed occaecati et.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Rustic Metal Chair',
    slug: 'Rustic-Metal-Chair',
    shortDesc: 'Reprehenderit in dolorem et est.',
    description:
      'Fuga officiis blanditiis fugiat. Vel sint dolore. Non quas facere minus ut ut possimus et iure.\n \rEum ipsa eum nulla dolor. Rerum error rerum voluptates praesentium est aut. Voluptas porro eum commodi sit expedita voluptate sed fugiat voluptatem. Omnis omnis qui voluptates magni sint sequi recusandae quia expedita. Ut consequatur adipisci.\n \rRerum eaque deserunt nemo nam. Inventore ipsum nihil. Nobis aliquid eum qui facilis. Quos repudiandae consequatur nulla velit aliquid est. Odit et molestias nostrum culpa. Nam commodi est ut rem animi.\n \rSed voluptas molestiae rerum. Laboriosam a provident et quia quia enim non consequatur a. Aperiam doloribus consequatur. Recusandae ea tenetur. Eos est ut. Esse voluptate sint quis et hic praesentium laboriosam repellendus vero.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 359,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 95 },
    seo: {
      title: 'Rustic Metal Chair | Zahradnictví u Juliuse',
      description: 'Reprehenderit in dolorem et est.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Rubber Pants',
    slug: 'Tasty-Rubber-Pants',
    shortDesc: 'Soluta qui omnis voluptas molestiae est dolores.',
    description:
      'Voluptas nisi sed aut. Voluptates vel tenetur architecto sunt velit laudantium beatae accusamus voluptates. Sed sunt quae vero aut sed corrupti doloremque. Harum ducimus ea quia et. Nihil mollitia laborum ut amet. Excepturi cum quis.\n \rEx eius voluptas temporibus illo illum quo odit quaerat soluta. Cumque rerum suscipit. Quae earum illum.\n \rVelit veritatis deleniti ducimus illum quia aut sit in. Vel alias vel perspiciatis animi aut est nihil vel illo. Id nulla enim dolor quo voluptas atque numquam. Quo sed maxime. Qui sint nesciunt quod quo odio omnis. Est aliquid neque ex est.\n \rRerum quidem doloribus sequi blanditiis earum deserunt. Delectus consequatur asperiores architecto eum rerum. Tenetur aperiam odit vel ut deleniti repellat. Perspiciatis fuga est rem eveniet ut ratione a perferendis ab. Neque culpa sit soluta ut autem mollitia et maxime. Et odit pariatur voluptas quisquam nihil dolorem corrupti.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 99,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 67 },
    seo: {
      title: 'Tasty Rubber Pants | Zahradnictví u Juliuse',
      description: 'Soluta qui omnis voluptas molestiae est dolores.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Fantastic Wooden Car',
    slug: 'Fantastic-Wooden-Car',
    shortDesc: 'Non quisquam in facere.',
    description:
      'Et laboriosam facilis reprehenderit possimus quo ex autem tenetur laboriosam. Animi ea voluptates quod sed soluta vitae quod. Perferendis nemo natus. Cum harum et optio consequatur labore. Consequatur dolorem perspiciatis nesciunt qui reprehenderit et.\n \rEt et harum. Sit placeat aut iste adipisci enim velit pariatur iste eius. Sit minima voluptatem id eligendi sapiente rerum voluptas ut. Reiciendis sint consectetur id libero ipsa laboriosam aut aliquam.\n \rQui incidunt consequatur earum quis itaque voluptates sequi. Et quia consequatur neque. Atque ad sequi ea.\n \rUt iste eligendi repellendus aut odio nihil aut explicabo magni. Voluptas dolore occaecati omnis tempore vero. Mollitia quo minus quae corrupti nulla est modi veniam similique. Voluptatem dolores id qui est repellat eius vel repellat sint. Sed et laborum voluptas temporibus dolor.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 609,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 17 },
    seo: {
      title: 'Fantastic Wooden Car | Zahradnictví u Juliuse',
      description: 'Non quisquam in facere.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Incredible Rubber Soap',
    slug: 'Incredible-Rubber-Soap',
    shortDesc:
      'Omnis reprehenderit voluptatibus ex praesentium laudantium deleniti molestias velit veritatis.',
    description:
      'Consequatur voluptatem ea doloremque nam culpa. Eum nesciunt voluptate quo. Iure voluptatem quos nobis atque nemo libero architecto. Est nulla nihil officia dolorum.\n \rNulla nihil vel pariatur. Occaecati debitis ut earum eos exercitationem facilis qui ut. Aut at et ipsum tempora quia. Iste qui accusamus molestiae voluptatem.\n \rSunt animi incidunt deleniti autem molestiae laborum quidem quia. Illum dolor repudiandae est reprehenderit consequatur fugiat fugiat veritatis quia. Doloremque consequatur ea quod quod qui. Quisquam illo quia qui qui. Ipsa voluptate cupiditate tempore nihil ipsam itaque eius. Recusandae quo est repellat atque qui nostrum molestiae neque fugit.\n \rTemporibus quisquam ut aut officiis. Incidunt molestiae quos. Neque dicta assumenda expedita consequatur. Et vero ea in consequuntur quis. Ea odio quas voluptatem dolorem. Quia excepturi ut dolorem ut nemo labore architecto voluptates accusamus.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 66 },
    seo: {
      title: 'Incredible Rubber Soap | Zahradnictví u Juliuse',
      description:
        'Omnis reprehenderit voluptatibus ex praesentium laudantium deleniti molestias velit veritatis.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Unbranded Plastic Computer',
    slug: 'Unbranded-Plastic-Computer',
    shortDesc: 'Ex dolorum et blanditiis libero est quaerat commodi soluta.',
    description:
      'Nobis sit quia. Voluptatem dicta ut est iste adipisci repellat rem. Et voluptatem et magni qui enim sit dicta.\n \rNulla fugit laudantium illo facilis. Ut quia sed quam. Doloremque esse cum nisi voluptatem.\n \rQuia vel delectus quibusdam ea. Nihil ipsam quia aliquid. Accusantium vel dolorem blanditiis aut sint id dolorem. Consectetur ut voluptatem ut est consequatur. Dolores perferendis animi dolorem omnis corrupti nobis voluptatem laborum asperiores. Sequi ea assumenda vero.\n \rAlias odit mollitia reiciendis. Maiores repudiandae accusamus voluptatem officiis est ab soluta facilis. Doloribus reprehenderit inventore.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 75 },
    seo: {
      title: 'Unbranded Plastic Computer | Zahradnictví u Juliuse',
      description:
        'Ex dolorum et blanditiis libero est quaerat commodi soluta.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Handcrafted Granite Computer',
    slug: 'Handcrafted-Granite-Computer',
    shortDesc: 'Et et incidunt eaque.',
    description:
      'Eius impedit facilis beatae eos quae voluptas dolor quod qui. Voluptatem placeat quidem ut corporis nihil iusto impedit impedit eos. Dolorem quae et ut ipsa. Et quis aut et asperiores nemo.\n \rSunt mollitia quia saepe quisquam voluptate. Nobis veniam ut culpa impedit aut dolor a aliquam dignissimos. Sequi saepe eum. Deserunt dolorum quis exercitationem praesentium.\n \rEst maiores enim sed doloremque ut qui qui aut. Et reprehenderit est placeat pariatur. Voluptatem sunt magnam mollitia est. Sequi eligendi enim corrupti doloribus at nobis aut commodi autem.\n \rPossimus et nam unde voluptas nihil. Hic necessitatibus quo unde qui unde aut nulla. In consequatur nobis error saepe velit. Odio vel et voluptatem recusandae ipsam deleniti dolore mollitia. Sapiente sint unde est.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 119,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 3 },
    seo: {
      title: 'Handcrafted Granite Computer | Zahradnictví u Juliuse',
      description: 'Et et incidunt eaque.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Awesome Granite Car',
    slug: 'Awesome-Granite-Car',
    shortDesc: 'Fuga modi laborum qui eum omnis.',
    description:
      'Autem non sit consequatur laboriosam rerum. Voluptates ratione amet quidem illum. Odit nostrum eaque autem nobis voluptatem. Debitis eum ut. Delectus est eos quos quia ad molestiae quis suscipit. Qui animi quibusdam dicta.\n \rDolores quisquam omnis et incidunt iusto quaerat. Tempora et eos ipsam consectetur. Non voluptatum libero porro soluta. Exercitationem voluptatem vero maiores distinctio a assumenda voluptates repudiandae officiis.\n \rEt tempore nobis qui sint reiciendis. Tempora deserunt voluptas placeat beatae non dolores sed optio eum. Ab quidem doloremque similique tempora et laborum sit fugiat nostrum. Delectus quia voluptatem dolores unde in.\n \rAut error laborum inventore neque impedit autem dolor voluptas quia. Error voluptatem minima quis laboriosam cupiditate qui. Et nulla sit vero aliquam.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 15 },
    seo: {
      title: 'Awesome Granite Car | Zahradnictví u Juliuse',
      description: 'Fuga modi laborum qui eum omnis.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Rustic Steel Computer',
    slug: 'Rustic-Steel-Computer',
    shortDesc: 'Fugiat odit fuga nam maiores hic molestias.',
    description:
      'Blanditiis possimus harum. Aut eos consequatur tenetur. Recusandae consectetur quaerat laudantium pariatur aut natus vitae cumque eum. Vel accusamus rerum sint.\n \rEos molestiae laborum ex qui totam. Sunt et consequatur suscipit nam voluptatem debitis ipsa. Dolor nemo rerum est et. Odit dolores omnis impedit illo laboriosam quisquam amet porro est.\n \rQui rerum voluptatem ut eum qui ipsa doloremque dolorem est. Cumque voluptas incidunt qui quos voluptatem et voluptatibus voluptatem. Dolore corporis distinctio laudantium magni blanditiis aliquam sunt. Non qui aspernatur eveniet temporibus aut. Numquam natus est hic maiores molestiae consequatur atque consequatur illo. Quaerat similique maxime.\n \rNumquam officiis alias dignissimos nesciunt aspernatur ea aspernatur dolorem autem. Natus error hic aut dolore qui ut. Dolores neque quisquam ipsum autem excepturi quis et accusamus.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 79,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 76 },
    seo: {
      title: 'Rustic Steel Computer | Zahradnictví u Juliuse',
      description: 'Fugiat odit fuga nam maiores hic molestias.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Fresh Ball',
    slug: 'Gorgeous-Fresh-Ball',
    shortDesc: 'Velit quasi odio eum accusantium dolores recusandae libero.',
    description:
      'Laboriosam quo temporibus corporis inventore. Nemo possimus corrupti provident adipisci totam. Et quasi incidunt officiis et. Voluptas beatae recusandae doloribus.\n \rImpedit sit quas tempore consequatur omnis quis. Tempore iusto possimus amet. Minima architecto ea tempora amet. Asperiores vitae repellendus id cum vitae et consequatur esse fugit. Vel aut blanditiis quos atque.\n \rNatus aut laborum. Assumenda odit hic quasi earum ut. Accusantium nihil labore enim nemo quisquam tempora ipsum voluptatem.\n \rAb inventore quia similique est libero aliquid aut. Itaque quod atque rerum commodi incidunt. Culpa harum in. Voluptatem qui eos. Esse fugiat autem laboriosam. Aut iste est quis aut impedit.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 11 },
    seo: {
      title: 'Gorgeous Fresh Ball | Zahradnictví u Juliuse',
      description:
        'Velit quasi odio eum accusantium dolores recusandae libero.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Handmade Granite Chips',
    slug: 'Handmade-Granite-Chips',
    shortDesc: 'Quisquam aut corporis et cupiditate voluptas odio quia.',
    description:
      'Sed voluptatem ipsa nobis culpa earum inventore quis. Veritatis iusto qui voluptas nesciunt. Nesciunt voluptates odit soluta assumenda.\n \rQuis et omnis aliquid. Dolores eos maxime nulla velit quasi corporis quaerat. Facilis eum rem voluptatem facilis vero cupiditate ut repudiandae quam. Et voluptatem in atque quia.\n \rVoluptas eveniet possimus omnis sit nam qui aut sit tempora. Omnis rerum sunt voluptatem asperiores et ut. Vel blanditiis et ab unde eveniet neque excepturi doloribus. Et impedit praesentium doloribus sunt laborum id voluptatum. Quaerat et tempora porro culpa odit nihil omnis voluptas.\n \rFacere deleniti vel sed. Repellendus at esse cum iure nam tempora tempora delectus. Sed voluptatibus alias sunt est et et.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 219,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 80 },
    seo: {
      title: 'Handmade Granite Chips | Zahradnictví u Juliuse',
      description: 'Quisquam aut corporis et cupiditate voluptas odio quia.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Refined Concrete Soap',
    slug: 'Refined-Concrete-Soap',
    shortDesc: 'Ea soluta hic facere ad molestiae illum.',
    description:
      'Explicabo recusandae qui et distinctio consectetur nam. Nihil libero mollitia maiores dolorem ipsum quia perspiciatis. Impedit omnis sit velit omnis.\n \rEnim enim distinctio ullam alias mollitia. Eos illo labore animi sit id. Hic enim deserunt perspiciatis.\n \rQuod voluptate a laboriosam ullam dignissimos quis dolores autem. Nam sit molestias impedit adipisci. Debitis ut dolorum voluptatem qui aut neque quae voluptate. Consequatur cupiditate iste deserunt explicabo asperiores corporis est. Quas dolorum est dolorem occaecati sit. Facilis laboriosam aliquam voluptatibus reiciendis mollitia et dolorum.\n \rUt quia omnis cum quis optio et. Fugiat nulla quis incidunt quidem sed. Magnam et adipisci in dicta et. Labore est id. Ipsum officiis ipsam est a optio delectus aliquid minus aperiam. Est esse tempora quos officia rerum voluptas.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 539,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 55 },
    seo: {
      title: 'Refined Concrete Soap | Zahradnictví u Juliuse',
      description: 'Ea soluta hic facere ad molestiae illum.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Fantastic Plastic Soap',
    slug: 'Fantastic-Plastic-Soap',
    shortDesc: 'Sint enim possimus.',
    description:
      'Voluptatem architecto non facilis magnam hic ullam. Quia rem veritatis. Blanditiis non sapiente dignissimos enim numquam.\n \rTemporibus quia blanditiis voluptatum officiis possimus iste esse. Est voluptatum sed laborum et dolorum animi ut sequi atque. Sequi odit delectus est temporibus quidem rerum delectus quaerat nulla.\n \rVoluptas quas maxime et nihil nulla amet consequatur velit. Distinctio ipsa commodi quasi vel veniam voluptas quis. Voluptatum molestias sit eum ut consequatur necessitatibus. Et vitae culpa distinctio consequatur nostrum. Molestiae voluptatibus laudantium sed cum.\n \rEx aperiam dolorem aut amet dolorem exercitationem voluptas eum. Odio dolorem voluptas omnis et. Incidunt repellat quo est. Laborum aliquam nobis officia. Illo laboriosam voluptatem voluptas earum saepe saepe amet velit.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 289,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 33 },
    seo: {
      title: 'Fantastic Plastic Soap | Zahradnictví u Juliuse',
      description: 'Sint enim possimus.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Gorgeous Plastic Shirt',
    slug: 'Gorgeous-Plastic-Shirt',
    shortDesc: 'Laborum sit ut molestiae eos fugiat.',
    description:
      'Facilis beatae eum nobis corrupti aut aut nulla. Assumenda doloremque ea quia cupiditate veniam et est aut. Quia in magnam illo itaque tempora assumenda id provident. Recusandae adipisci non recusandae esse modi. Modi animi dolor et accusantium autem aut.\n \rCorrupti perspiciatis laboriosam laudantium. Praesentium nesciunt eum culpa sit maiores natus nobis. Id tempore sunt.\n \rUt eum quibusdam dignissimos soluta et. Recusandae laudantium aut aliquid non. Nisi error ut dolorem est odio. Molestiae illo magni quibusdam quaerat illo qui.\n \rSed qui non iure vel. Iusto ipsam sit praesentium ut asperiores. Expedita accusamus porro recusandae consequuntur odit. Est repellat delectus omnis officiis assumenda cum quam quia et.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 159,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 75 },
    seo: {
      title: 'Gorgeous Plastic Shirt | Zahradnictví u Juliuse',
      description: 'Laborum sit ut molestiae eos fugiat.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Generic Plastic Bike',
    slug: 'Generic-Plastic-Bike',
    shortDesc: 'Inventore ex nostrum alias.',
    description:
      'Aut enim reprehenderit et sint. Odio veniam sed suscipit. Sint tempore quia aspernatur maiores. Natus velit eaque quis unde.\n \rEius nemo deleniti velit. Delectus voluptatem voluptas voluptatem dolor ea amet. Porro ut minima deserunt dolorem. Dolorem id voluptatem. Quis eos aperiam laboriosam optio perferendis mollitia rerum consequatur id. Et vel veritatis.\n \rEst necessitatibus velit. Voluptatem voluptatem sapiente. Ipsum animi id numquam incidunt minima necessitatibus. Atque soluta eos nemo commodi similique recusandae et tempora explicabo. Voluptatem ullam aut dolorum eveniet consectetur. Id vel quas officia molestiae.\n \rOmnis ipsum dolor. Quisquam suscipit praesentium ipsum aut suscipit et vel fuga non. Quos laboriosam est amet possimus harum est placeat fugit temporibus. Quaerat repellat et. Et corporis reiciendis dolor quia enim quas aliquam est. Et ab impedit ut dolores quisquam in perferendis necessitatibus perferendis.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 389,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 5 },
    seo: {
      title: 'Generic Plastic Bike | Zahradnictví u Juliuse',
      description: 'Inventore ex nostrum alias.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Gorgeous Cotton Bacon',
    slug: 'Gorgeous-Cotton-Bacon',
    shortDesc: 'Asperiores voluptatem commodi voluptas eum atque.',
    description:
      'Iusto consectetur omnis at. Laudantium iste cupiditate assumenda itaque ullam delectus et. Aut architecto repudiandae nihil voluptatem exercitationem dolorem pariatur debitis dolorem.\n \rMaiores vero sed consequuntur. Nihil aut velit qui facere tempora eos. Tempora perferendis officia. Incidunt harum dolor. Adipisci neque sed perspiciatis voluptas reprehenderit error.\n \rMagni nostrum amet ipsam tempore. Magnam facere veritatis fugit laudantium et. Totam incidunt incidunt a ea. Placeat aut voluptatem ipsam consectetur reprehenderit sed. Maiores ratione quidem saepe cumque.\n \rCorporis tempora quos possimus minus odit. Iure qui aliquam voluptas voluptates dignissimos modi eaque consequatur necessitatibus. Voluptatibus rerum aut itaque reprehenderit unde consequuntur et. Labore reprehenderit sed et iusto dicta repudiandae.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 259,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 98 },
    seo: {
      title: 'Gorgeous Cotton Bacon | Zahradnictví u Juliuse',
      description: 'Asperiores voluptatem commodi voluptas eum atque.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Unbranded Rubber Salad',
    slug: 'Unbranded-Rubber-Salad',
    shortDesc: 'Totam et non ut ex hic architecto vel quo.',
    description:
      'Omnis dignissimos laboriosam est esse quis. Doloribus voluptates corporis architecto perspiciatis ea. Non a eveniet odio sed. Quae hic consequatur et sed.\n \rDeserunt qui aut rem sit. Facilis soluta corrupti facilis eius eum id dolor. Provident et recusandae aut officiis qui dolorem laudantium. Beatae facilis exercitationem qui voluptas molestias voluptate.\n \rOdit tempore possimus molestiae repudiandae voluptas assumenda. Voluptatem error voluptates hic dolor rem fuga doloremque. Consequatur molestiae impedit nulla sed necessitatibus assumenda repellat vel voluptatum. Consectetur dolore et dignissimos quaerat sed perspiciatis. Quasi saepe fuga. Aliquid aut sed iste.\n \rNumquam debitis est asperiores. Consequuntur hic enim voluptas repellendus doloremque iste officia. Adipisci ratione possimus temporibus nihil quasi. Consequatur rerum neque explicabo molestiae dolores accusamus ut unde repudiandae. Est ipsam quae accusamus qui et asperiores aut et ea. Dolores dolorem a non omnis voluptatem natus.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 219,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 41 },
    seo: {
      title: 'Unbranded Rubber Salad | Zahradnictví u Juliuse',
      description: 'Totam et non ut ex hic architecto vel quo.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Ergonomic Cotton Car',
    slug: 'Ergonomic-Cotton-Car',
    shortDesc: 'Est tempora ut sit.',
    description:
      'Sed sunt et aliquam consequatur. Ea sequi qui rerum itaque ut corrupti culpa mollitia et. Ducimus et suscipit qui in placeat quis quae earum. Nihil aliquam officiis.\n \rRerum et illo tenetur numquam in optio vel. Quas eligendi aut. Soluta provident atque amet eligendi voluptas id temporibus nobis quidem.\n \rSoluta voluptatum commodi architecto culpa ab. Id laboriosam asperiores consequatur. Ut esse ipsum et libero consequatur eligendi sunt facere dicta. Soluta minus pariatur necessitatibus voluptatem velit. Quos voluptas nihil adipisci repellendus perferendis.\n \rEst iusto consequuntur quo nesciunt quidem et a esse. Fugit eius at rerum soluta odio nihil veritatis. Illum perferendis facilis corrupti minima qui exercitationem. Numquam fugiat error voluptas voluptatibus provident qui sunt. Facere odio et. Et et sed modi consequatur nemo vel impedit aut consectetur.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 319,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 30 },
    seo: {
      title: 'Ergonomic Cotton Car | Zahradnictví u Juliuse',
      description: 'Est tempora ut sit.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Handcrafted Granite Towels',
    slug: 'Handcrafted-Granite-Towels',
    shortDesc: 'Quia et aliquid harum quaerat iure temporibus voluptatem.',
    description:
      'Quibusdam ut aut accusamus et dolores aut distinctio. Et quae dicta ut quisquam enim praesentium ex totam. Dicta rerum ipsa ea. Molestiae et inventore rerum error qui vel voluptas facere possimus. Nihil nesciunt velit autem aut expedita est sed magni. Voluptatibus aliquid eveniet nulla itaque error optio quia.\n \rNumquam dolorum ut quas esse blanditiis possimus enim molestiae. Recusandae occaecati soluta dolorum quia consequuntur sunt. Cupiditate aut facere et nisi quis omnis. Non inventore ipsam maiores est et possimus accusantium minima. Fugiat eligendi maiores quas est id enim totam deserunt. A culpa et consequuntur.\n \rOdit nisi omnis et est rerum debitis veniam ex. Nulla enim sit ut. Minima eos nesciunt dolorem quisquam. Repellat voluptatem quidem culpa fugit est non sapiente. Rem molestiae et enim praesentium maxime.\n \rSoluta sit nam excepturi. Id voluptatum vero omnis dolore molestiae. Sunt aperiam iure occaecati. Qui officiis facilis enim adipisci quis.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 109,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 9 },
    seo: {
      title: 'Handcrafted Granite Towels | Zahradnictví u Juliuse',
      description: 'Quia et aliquid harum quaerat iure temporibus voluptatem.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Sleek Metal Salad',
    slug: 'Sleek-Metal-Salad',
    shortDesc:
      'Tempora reiciendis pariatur sequi veritatis voluptatem esse est sed voluptatem.',
    description:
      'Neque quidem in est. Aut et facere quidem aliquid possimus minus. Rerum et est ut pariatur voluptatibus. Et ipsa ea nam error modi maxime autem nisi iusto. Ut labore quo.\n \rEt asperiores similique voluptatem dignissimos sunt iste et voluptatem et. Sint est qui maxime incidunt quod voluptate laborum. Maxime error eius doloremque. Qui error ducimus. Autem illum magni consequatur ipsam odit nisi.\n \rNesciunt quibusdam amet est sit sed qui omnis. Impedit cumque voluptatem minus quidem et accusamus. Explicabo optio ut et eos cum cupiditate vero. Ut porro sunt rerum autem porro ducimus numquam. Cum cum doloribus. Et non qui est voluptatem dicta sapiente omnis.\n \rSoluta aut aut. Nisi asperiores ratione cupiditate in assumenda. Omnis earum qui dignissimos libero aut culpa molestiae ullam.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 129,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 9 },
    seo: {
      title: 'Sleek Metal Salad | Zahradnictví u Juliuse',
      description:
        'Tempora reiciendis pariatur sequi veritatis voluptatem esse est sed voluptatem.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Fantastic Fresh Table',
    slug: 'Fantastic-Fresh-Table',
    shortDesc: 'Odit hic aspernatur maxime quia aut in ab.',
    description:
      'Enim modi voluptate laboriosam necessitatibus fugiat ut. Vero id qui voluptas et eum animi consequuntur. Ea nemo vitae dolores.\n \rPerspiciatis officia eligendi nisi. Omnis laboriosam et quibusdam. Accusantium quia exercitationem et sit repellendus ut temporibus. Facere veritatis sed. Dolorem et libero repudiandae in molestias magnam at.\n \rReprehenderit suscipit laboriosam consequuntur minus voluptates omnis et doloribus. Error perspiciatis voluptate impedit voluptatem. Vitae quia praesentium rerum.\n \rMaiores molestiae officiis reprehenderit voluptatem. Asperiores tempora nostrum facilis earum sequi. Consequatur saepe repellendus rerum provident qui non quia itaque. Nam enim voluptas aut est in.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 379,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 34 },
    seo: {
      title: 'Fantastic Fresh Table | Zahradnictví u Juliuse',
      description: 'Odit hic aspernatur maxime quia aut in ab.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Gorgeous Granite Table',
    slug: 'Gorgeous-Granite-Table',
    shortDesc: 'Quia qui quis itaque.',
    description:
      'Ipsa est velit quia hic et magnam cupiditate. Et maxime ab inventore tempore vel. In eaque accusamus quae ipsam nam similique ut. Est eveniet minus reiciendis illum voluptatum inventore debitis corrupti. Exercitationem soluta debitis accusantium molestiae.\n \rVelit sapiente voluptatibus aut consequatur ex porro asperiores autem. Similique repudiandae earum dolorem perspiciatis ab. Quo rem corporis illum.\n \rEt laborum dolore. Sed omnis alias nobis quam blanditiis ratione deserunt dolorem. Non reiciendis consequatur maiores. Dolor sint nulla corporis maiores eum libero quisquam minus. Ut cupiditate ipsam qui quae. Qui dolorum nobis sit ea optio qui.\n \rIste minima cupiditate. Eius odio facere dolor distinctio non est. Beatae voluptatem vel distinctio expedita.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 77 },
    seo: {
      title: 'Gorgeous Granite Table | Zahradnictví u Juliuse',
      description: 'Quia qui quis itaque.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Small Granite Tuna',
    slug: 'Small-Granite-Tuna',
    shortDesc: 'Minima facilis incidunt sequi.',
    description:
      'Magnam quasi earum vel quia ex dolorem. Labore occaecati omnis omnis dicta dolores atque aut. Dolor sint qui consequatur animi reiciendis excepturi magnam. Dolorem dolor voluptatem amet laborum quidem qui enim ratione.\n \rMolestiae sit culpa consectetur ipsa modi. Aut illum voluptatem aut quis similique iure ea. Harum quam delectus tempore odit quaerat laudantium eum ab.\n \rFugiat cum hic similique ratione. Earum cupiditate ea. Fuga facilis saepe sunt possimus.\n \rQui officiis natus saepe eveniet mollitia voluptatibus magnam pariatur. Eligendi magni quia ipsa. Repellendus impedit labore esse inventore id deleniti blanditiis.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 539,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 14 },
    seo: {
      title: 'Small Granite Tuna | Zahradnictví u Juliuse',
      description: 'Minima facilis incidunt sequi.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Licensed Frozen Hat',
    slug: 'Licensed-Frozen-Hat',
    shortDesc: 'Omnis sit maxime cum.',
    description:
      'Fugit tenetur fugit. Eum rerum nobis quia. Nobis enim esse perspiciatis omnis.\n \rDolorem voluptas facere dolor dolorem quaerat perspiciatis veniam. Provident et ut. Ullam sed pariatur et in et rerum. Nisi suscipit illo quaerat non et adipisci numquam.\n \rIllo inventore reprehenderit est natus nulla inventore delectus sed voluptate. Qui ut accusamus dignissimos illo sit illum ipsum velit. Maiores id vitae. Quo in voluptate ut id aut voluptatum voluptatem. Perferendis non nam perferendis vel excepturi est fugiat voluptatem aut.\n \rNobis dolorem debitis iste. Architecto temporibus rem. Expedita ducimus quia minus non amet illum sed. Officiis autem dolore. Aut magni sunt. Doloremque commodi aut omnis numquam provident velit laudantium.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 419,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 94 },
    seo: {
      title: 'Licensed Frozen Hat | Zahradnictví u Juliuse',
      description: 'Omnis sit maxime cum.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Incredible Metal Chips',
    slug: 'Incredible-Metal-Chips',
    shortDesc:
      'Molestiae itaque officiis ducimus accusamus et sed sint voluptatem molestias.',
    description:
      'Cupiditate nihil numquam. Cupiditate modi in dicta. Optio ut veniam voluptatibus itaque non. Nisi error dignissimos vero beatae illo libero ullam.\n \rSit error qui maiores nemo molestiae aut nihil unde nihil. Facere animi molestiae error est quis atque quo. Et corrupti doloribus id eos cupiditate. Qui quas ut. Est magnam est hic eos ab. Excepturi et ab possimus dignissimos quis.\n \rSaepe fuga dolor ipsa et sed iure. Occaecati dolore voluptatem. Corporis cupiditate corrupti. Dolor laudantium praesentium tempore perspiciatis voluptate tenetur.\n \rRerum accusantium exercitationem id. Ipsam ab nihil eius doloremque. Aut et et autem nesciunt dolores.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 199,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 13 },
    seo: {
      title: 'Incredible Metal Chips | Zahradnictví u Juliuse',
      description:
        'Molestiae itaque officiis ducimus accusamus et sed sint voluptatem molestias.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Soft Gloves',
    slug: 'Practical-Soft-Gloves',
    shortDesc: 'Non voluptatem autem cumque quis modi iusto in.',
    description:
      'Dolores nihil illo voluptas id. Aut culpa officiis enim libero omnis ut rerum. Voluptatum minus iste earum saepe sed rerum. Aut aut pariatur. Exercitationem sed porro hic quisquam.\n \rDolore exercitationem odio. Omnis vel voluptatem eveniet. Quos facilis distinctio omnis qui rem. Veniam veniam consequatur aliquid. Minus sapiente consequatur velit amet rerum aut dolore voluptates.\n \rQui optio sint quo illum libero. Voluptas quia aliquid unde ut reiciendis sed cumque. Dolore consequatur dolorem molestiae sit aut qui maxime. Qui reiciendis error. Et quia aut deleniti ut adipisci ut. Iste atque sunt sed.\n \rLibero ab quis reprehenderit ut error eius. Quo molestiae qui esse delectus quis autem. Iste eos ipsum ea dolores. Laborum quia corporis ut veniam quas explicabo est maxime at.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 419,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 5 },
    seo: {
      title: 'Practical Soft Gloves | Zahradnictví u Juliuse',
      description: 'Non voluptatem autem cumque quis modi iusto in.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Practical Plastic Shoes',
    slug: 'Practical-Plastic-Shoes',
    shortDesc: 'Assumenda aperiam sed ipsam nam eius ea ut.',
    description:
      'Fuga aut adipisci distinctio. Sit porro quo quibusdam rerum tempore. Et dolorum consequatur ad. Illo qui mollitia. Magni qui a.\n \rMaiores est error ut vero pariatur aperiam assumenda quidem nisi. Aut omnis alias maiores blanditiis quisquam veniam. Ducimus eum est id exercitationem voluptatum. Odit ea omnis aut.\n \rQuo vel et. Nobis voluptatem pariatur est ea adipisci nam reprehenderit. Similique dolor beatae facere. Molestiae dolorem quae quis dolor ullam quis. Ex facilis eos eaque. Rerum dolore praesentium officiis ut aut quidem.\n \rCulpa quas perspiciatis maiores doloremque voluptatem velit reiciendis ut. Labore sunt ut atque autem. Maiores quibusdam voluptate tempore hic. Et sit aut non voluptas beatae sed totam incidunt. Hic esse cupiditate quo similique ad sequi officia tempore.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 59,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 19 },
    seo: {
      title: 'Practical Plastic Shoes | Zahradnictví u Juliuse',
      description: 'Assumenda aperiam sed ipsam nam eius ea ut.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'prosinec' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Fantastic Plastic Pants',
    slug: 'Fantastic-Plastic-Pants',
    shortDesc: 'Aspernatur magnam saepe dolor ipsum sit.',
    description:
      'Delectus aut quia quos eum non ut incidunt rem. Ad consequatur iste recusandae aspernatur et consequatur eum id. Quibusdam suscipit consequatur veritatis id animi voluptatem ut. Voluptas quis architecto est aperiam ducimus. Qui nostrum ex.\n \rSimilique aut natus provident ab. Et error repellat quia cupiditate enim. Voluptates iste suscipit blanditiis libero dolorem voluptatum. Optio numquam autem animi quis quam dolor totam sit. Dolorum vero minus labore aut.\n \rLaudantium reprehenderit rerum. Repellat doloremque sunt. Adipisci aut non consequatur nisi. Inventore molestiae recusandae dolores et voluptas non corporis deleniti rerum. Non est voluptas odio quo.\n \rEt veniam et minima a ut autem. Molestiae suscipit velit totam quibusdam eveniet eos. Cupiditate provident accusamus officia aut mollitia consectetur inventore minus. Tempora odit exercitationem praesentium. Quia sequi quis.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 539,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 74 },
    seo: {
      title: 'Fantastic Plastic Pants | Zahradnictví u Juliuse',
      description: 'Aspernatur magnam saepe dolor ipsum sit.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Practical Rubber Pizza',
    slug: 'Practical-Rubber-Pizza',
    shortDesc: 'Qui at laborum quo ea quaerat et nobis error.',
    description:
      'Maiores inventore et velit animi esse. Repellat rem sed ut labore nesciunt quia. Maxime quia aut laudantium qui dolores voluptatem enim sint voluptatum. Tempore est eos ea corporis non sed similique repudiandae. Aut sit sunt ipsa repellendus ut. Eum iure sed voluptas ab quis ratione commodi ut.\n \rAt aspernatur eos voluptate quo voluptatem. Doloremque est beatae. Porro tenetur qui.\n \rQuasi deserunt recusandae necessitatibus odio ut tenetur sunt architecto. Quos officia neque nihil voluptates necessitatibus. Expedita sit provident consequatur non. Repellendus vel perspiciatis nobis. Eum eum dignissimos voluptatem quidem cumque error rerum modi occaecati.\n \rAspernatur dolor et. Suscipit exercitationem qui expedita et laudantium placeat eos est provident. Omnis soluta vel quia saepe est delectus est sapiente. Consequuntur qui est accusamus est. Voluptates earum optio neque cum sed est vero non veritatis. Et inventore velit porro est sit aspernatur dignissimos dicta et.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 109,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 27 },
    seo: {
      title: 'Practical Rubber Pizza | Zahradnictví u Juliuse',
      description: 'Qui at laborum quo ea quaerat et nobis error.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'červená' },
    ],
  },
  {
    title: 'Sleek Wooden Cheese',
    slug: 'Sleek-Wooden-Cheese',
    shortDesc: 'Maxime aut autem maxime qui ratione non ipsa.',
    description:
      'Sit aliquam doloribus. Dolores occaecati labore totam. Magnam perspiciatis quae. Beatae et ipsa eaque est magnam aut voluptatem. Dicta dolorem nihil.\n \rAb voluptate totam cum vitae qui sunt qui quo. Autem asperiores dolores dicta sunt officia voluptatem eius et sequi. Explicabo recusandae qui cum iure aut facere at repellendus porro. Dicta ad occaecati tempora.\n \rVoluptatem provident voluptas possimus ab voluptates. Voluptatem maiores a totam doloribus quisquam beatae sit dolor voluptatem. Dolor illo numquam dolorum modi eum voluptas. Eius quia repellendus minima qui molestiae provident ad nisi. Occaecati voluptatum quod explicabo quidem beatae.\n \rDebitis laborum consequatur et suscipit quia odio quod vitae. Totam ea dicta nam unde nostrum. Expedita voluptates et perspiciatis fuga explicabo. Minus tempore ipsam doloribus blanditiis repudiandae.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 369,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 5, instockCount: 19 },
    seo: {
      title: 'Sleek Wooden Cheese | Zahradnictví u Juliuse',
      description: 'Maxime aut autem maxime qui ratione non ipsa.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Refined Soft Hat',
    slug: 'Refined-Soft-Hat',
    shortDesc:
      'Beatae quod officia labore sunt adipisci consequatur commodi non.',
    description:
      'Ipsam ab non debitis sit. Accusamus eaque qui sed aut similique dolor omnis hic velit. Eius id adipisci est velit et quis.\n \rEt sit magni quo voluptas voluptatibus. Qui voluptatem placeat quod. Ipsam dignissimos sequi. Et voluptatem sit repellendus. Eum ut dolorem ex qui qui repudiandae.\n \rEarum beatae inventore consectetur. Autem qui quod vero maxime nisi. Officiis nisi sint in aliquid maiores quia omnis perspiciatis sit. Architecto dolor quas ab in dicta sapiente non dignissimos.\n \rAperiam eos aut molestiae omnis totam facere. Provident aperiam explicabo quisquam voluptatum itaque. Consequatur est qui nulla repellendus voluptates nihil et asperiores dicta. Ipsa optio facilis quaerat aliquid ea reiciendis. Unde quidem vero unde sint optio molestias commodi sit sint.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 14 },
    seo: {
      title: 'Refined Soft Hat | Zahradnictví u Juliuse',
      description:
        'Beatae quod officia labore sunt adipisci consequatur commodi non.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Fantastic Metal Ball',
    slug: 'Fantastic-Metal-Ball',
    shortDesc: 'Voluptatem rerum error.',
    description:
      'Fuga et et aut quas. Nihil nobis nulla. Consequatur molestias dolorum aut vel. Et recusandae dolorum maxime autem deserunt est.\n \rUt et assumenda recusandae. Earum vel iste culpa non molestias ea. Est provident nam consequuntur provident. Totam nam eum voluptas sit nostrum. Eius sed quia eum est. Et dolorum voluptas.\n \rAliquid sint consequuntur sunt nihil dolores iusto. Autem ut totam eius explicabo exercitationem non non. Amet eum tempora aut recusandae.\n \rModi est impedit molestias deserunt et culpa. Molestiae sint et. Pariatur quaerat voluptatem omnis eum.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 109,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 3, instockCount: 38 },
    seo: {
      title: 'Fantastic Metal Ball | Zahradnictví u Juliuse',
      description: 'Voluptatem rerum error.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'duben' },
      { name: 'Barva květu', value: 'žlutá' },
    ],
  },
  {
    title: 'Handcrafted Granite Ball',
    slug: 'Handcrafted-Granite-Ball',
    shortDesc: 'Eligendi non cupiditate aut ut ut ut eius magni nesciunt.',
    description:
      'Praesentium est natus. Non enim velit amet nostrum fugiat. Nisi neque quos. Quas magnam reiciendis autem in sunt. Ea illum repellat eaque laudantium placeat similique. Doloribus ab deleniti voluptates voluptatibus deleniti.\n \rUt non rerum accusantium autem rerum. Rerum vero et eligendi. Dolor nihil eveniet tenetur eius laudantium nemo nostrum. Numquam dolor at minus voluptate est amet. Laudantium dicta alias excepturi esse mollitia est maiores modi. Ut aut eaque consequatur non.\n \rMolestiae aut quibusdam assumenda occaecati et voluptatibus. Blanditiis rem dolores laborum saepe deserunt minima eum facilis. Laboriosam aperiam ipsum dignissimos ut illo quasi magnam. A earum eaque magnam fugiat.\n \rSint omnis autem in. Alias dicta qui. Eveniet porro et facere quam vitae a explicabo qui et. Qui laborum doloremque est autem reiciendis ut aut.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 269,
    similarProducts: [],
    stockState: { state: 'unavailable' },
    seo: {
      title: 'Handcrafted Granite Ball | Zahradnictví u Juliuse',
      description: 'Eligendi non cupiditate aut ut ut ut eius magni nesciunt.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Gorgeous Soft Table',
    slug: 'Gorgeous-Soft-Table',
    shortDesc:
      'Delectus sunt a consequuntur repellendus unde sit voluptatum quod corrupti.',
    description:
      'Et temporibus exercitationem impedit molestiae dolor quia est incidunt optio. Excepturi harum voluptatem natus quaerat velit aut pariatur. Modi aut non dolor sit praesentium repellendus neque. Mollitia quae consequuntur non ipsa velit.\n \rNostrum dolores sed voluptates cumque sint et assumenda a. Dolor aut iure ducimus ab eos amet sint. Vitae voluptatem aspernatur. Ut omnis voluptatem. Qui et qui quaerat adipisci. Iusto asperiores et sit sed fugiat magni enim.\n \rEnim magni itaque corrupti deleniti porro adipisci beatae adipisci ea. Dolorem veritatis excepturi qui. Sunt quibusdam et commodi nobis qui suscipit. Non velit esse expedita itaque. Ea rerum impedit. Maxime dolores numquam incidunt voluptatem ducimus in accusamus.\n \rDucimus sequi est ea nobis quo. Qui velit commodi voluptatem porro nam provident error. Iste porro magni illo quo autem dolor.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 49,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 2, instockCount: 47 },
    seo: {
      title: 'Gorgeous Soft Table | Zahradnictví u Juliuse',
      description:
        'Delectus sunt a consequuntur repellendus unde sit voluptatum quod corrupti.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '10-20°C', ico: 'fa-thermometer-empty' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
  {
    title: 'Licensed Frozen Fish',
    slug: 'Licensed-Frozen-Fish',
    shortDesc: 'Vel labore consequuntur explicabo.',
    description:
      'Provident est temporibus repellat odio deserunt accusamus ad. Expedita omnis aut dolorum distinctio. Facilis assumenda in in. Repellendus numquam officia quis debitis ex non.\n \rFugit et dolorem voluptatem ullam ut earum est officiis. Maxime suscipit fugiat consequuntur aliquam molestiae magnam nihil. Magni occaecati facilis nostrum nemo quis quae impedit. Temporibus perferendis totam possimus nemo. Deleniti provident ut eaque sapiente qui.\n \rQuisquam voluptates qui blanditiis veritatis placeat voluptas rerum dolorem suscipit. Debitis quibusdam voluptas. Earum ipsa doloremque. Natus nostrum et.\n \rQuia qui reprehenderit deserunt tenetur iste in. Qui ipsum aut optio reprehenderit cupiditate illum. Sed omnis quis. Omnis beatae ad sed nobis corrupti veritatis quia sed. Quis vitae omnis similique natus.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 579,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 23 },
    seo: {
      title: 'Licensed Frozen Fish | Zahradnictví u Juliuse',
      description: 'Vel labore consequuntur explicabo.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Fantastic Granite Fish',
    slug: 'Fantastic-Granite-Fish',
    shortDesc:
      'Impedit voluptatem accusantium aut quae repellat reprehenderit architecto blanditiis dolor.',
    description:
      'Et omnis quaerat deleniti eos aut aperiam. Quaerat eligendi excepturi vitae totam quis error. Mollitia voluptatem beatae recusandae sunt. Nisi mollitia placeat ut repudiandae sint voluptatem adipisci.\n \rExpedita consequatur est aut asperiores sint officia. Officiis molestiae quidem error. Quia aut molestiae modi praesentium voluptate ut nam. Quam nisi et omnis maiores.\n \rConsequatur quaerat deserunt est. Ut corrupti ad nulla tempora dolore consequatur sed et. Sed blanditiis sint expedita harum doloremque molestiae saepe.\n \rHarum magni deserunt repellat quasi. Ducimus amet aliquam non quis suscipit porro. Ratione alias ratione voluptate esse deleniti velit. Ut facere perferendis aut. Rerum voluptatum similique facere earum natus consequatur. Quia magnam consequatur esse aspernatur et quis.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 299,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 63 },
    seo: {
      title: 'Fantastic Granite Fish | Zahradnictví u Juliuse',
      description:
        'Impedit voluptatem accusantium aut quae repellat reprehenderit architecto blanditiis dolor.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'zelená' },
    ],
  },
  {
    title: 'Licensed Granite Bike',
    slug: 'Licensed-Granite-Bike',
    shortDesc:
      'Nihil illum itaque provident porro quos quo repudiandae adipisci est.',
    description:
      'Qui ab a nobis cum. Et aut quae maiores dolor. Quia nihil ut asperiores.\n \rMinus aut autem laudantium doloribus. Ut dolore sunt ut non. Quia consequuntur beatae omnis iste officia reiciendis consequuntur adipisci. Fuga et qui alias temporibus est dolor laudantium illum. In officia iusto enim.\n \rVoluptate quisquam est autem id quidem expedita. Exercitationem fugit ut reprehenderit. Minima voluptates molestiae non porro itaque tenetur laborum. Ex adipisci deleniti laboriosam dignissimos quidem. Quia repellat voluptatum non dolores. Atque perferendis ut voluptates distinctio repellendus.\n \rAt et aliquid ipsam accusamus. Odio qui iste voluptatem quo consequatur incidunt. Eius atque eos ea officia et inventore. Aliquam praesentium consectetur adipisci numquam id saepe recusandae.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 299,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 29 },
    seo: {
      title: 'Licensed Granite Bike | Zahradnictví u Juliuse',
      description:
        'Nihil illum itaque provident porro quos quo repudiandae adipisci est.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '0–20cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen–říjen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Refined Soft Soap',
    slug: 'Refined-Soft-Soap',
    shortDesc: 'Sunt aut illo quae placeat nam quia sed adipisci.',
    description:
      'Fuga accusantium incidunt quae minima tenetur voluptas maxime. Autem sequi quam vero est beatae quis saepe. Assumenda inventore excepturi aut exercitationem possimus voluptatem ullam dolorem. Adipisci voluptatibus quidem. Praesentium voluptates expedita optio quos ut porro laudantium.\n \rAmet animi quas ipsam quis. Hic necessitatibus voluptate hic aliquid. Minima et voluptates magnam. Ut non maxime cupiditate.\n \rRerum blanditiis voluptas dolorem iste distinctio id. Beatae voluptas consequatur reiciendis eum. Id eum quam et omnis quis ab ut sit. Consequatur ut et ut impedit inventore assumenda libero molestiae et. Omnis quibusdam culpa. Id dolore tempore ratione saepe quia doloremque sint.\n \rUt nesciunt omnis sit aut amet officia. Voluptatem ut sed ut. Autem dolorem sit beatae aut atque. Ut mollitia itaque cumque sapiente veniam quia repellendus ratione ipsum. Nesciunt aut rerum fugit voluptas quisquam molestiae.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 499,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 23 },
    seo: {
      title: 'Refined Soft Soap | Zahradnictví u Juliuse',
      description: 'Sunt aut illo quae placeat nam quia sed adipisci.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x za dva týdny', ico: 'fa-cloud' },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '100–200cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Tasty Cotton Hat',
    slug: 'Tasty-Cotton-Hat',
    shortDesc: 'Corrupti assumenda laboriosam nobis illum.',
    description:
      'Voluptas qui est et molestiae. Ea dolores eos voluptas nisi ea voluptatum sit rem. Est culpa minus. Sunt eos vel perferendis. Eveniet ipsam sed.\n \rAut eum veniam ad tempore iusto quaerat minima aliquam. Dolores non praesentium ad animi. Sunt sint necessitatibus non nobis suscipit sunt delectus qui. Dolores at reiciendis assumenda molestiae.\n \rOccaecati sunt quia harum omnis. Omnis velit delectus quibusdam incidunt est quia dolore omnis omnis. Voluptate accusamus cupiditate debitis facilis sed. Ab odio inventore ut aspernatur ipsa aperiam. Dolores consequatur ut illum eius debitis veritatis recusandae consequuntur sit.\n \rInventore sit occaecati beatae. Aut odit magni aut architecto doloribus. Qui iure laboriosam.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 609,
    similarProducts: [],
    stockState: { state: 'available-soon', deliveryIn: 13 },
    seo: {
      title: 'Tasty Cotton Hat | Zahradnictví u Juliuse',
      description: 'Corrupti assumenda laboriosam nobis illum.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Stín', ico: 'fa-cloud' },
      {
        name: 'Nároky na zalévání',
        value: 'Každý den',
        ico: 'fa-cloud-showers-heavy',
      },
      { name: 'Teplota', value: '20–25°C', ico: 'fa-thermometer-half' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Ergonomic Frozen Cheese',
    slug: 'Ergonomic-Frozen-Cheese',
    shortDesc: 'Saepe doloremque velit rerum deleniti.',
    description:
      'Quaerat corrupti ut ex et at porro eum magnam. Eos non qui sit sed veritatis. Sit dolorem reprehenderit. Maxime aliquid minima.\n \rNam qui tempore est dolor rerum consequatur. Et error dolor minima optio. Velit id aut dolores voluptatem nulla autem fugiat.\n \rDolore alias aut. Dolorem esse velit ea. Et voluptatum non reiciendis hic adipisci quo eum occaecati. Ut consequatur earum quia quis. Atque amet non et ut harum qui mollitia. Ullam unde corrupti deleniti perferendis quia expedita aspernatur dolores.\n \rArchitecto rerum ut quasi. Vel reprehenderit ipsa voluptates autem natus deleniti quae cumque. Porro perspiciatis quas aut non repudiandae dolor. Rerum libero et porro in tempora neque eius numquam. Reiciendis excepturi eveniet qui. Ea nobis ipsa et nemo.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    price: 449,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 38 },
    seo: {
      title: 'Ergonomic Frozen Cheese | Zahradnictví u Juliuse',
      description: 'Saepe doloremque velit rerum deleniti.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/New Project (3).webp',
    },
    properties: [
      {
        name: 'Nároky na světlo',
        value: 'Světlé prostory',
        ico: 'fa-cloud-sun',
      },
      { name: 'Nároky na zalévání', value: '1–2x týdně', ico: 'fa-tint' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '20–50cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'květen–září' },
      { name: 'Barva květu', value: 'fialová' },
    ],
  },
  {
    title: 'Licensed Metal Bike',
    slug: 'Licensed-Metal-Bike',
    shortDesc:
      'Voluptatibus aliquid nulla soluta natus voluptatem perspiciatis laboriosam ipsam.',
    description:
      'Sapiente omnis autem omnis. Distinctio officiis dolorum voluptatem. Consequatur consequatur consectetur rem iure nemo. Veritatis eveniet modi est et nemo aperiam aut.\n \rAd ipsum assumenda. Dolorum cumque perferendis aut molestias quo culpa officia. Esse soluta dicta vel ea sunt sunt aut suscipit. Officia mollitia repellendus sequi quam saepe ipsam voluptas temporibus. In quia qui magni omnis veniam voluptas.\n \rNecessitatibus doloribus vitae ut numquam. Aut eos qui eligendi ut animi et adipisci. Ut qui rerum vero. Ullam repudiandae necessitatibus aliquid est et et et. Officiis et porro ut delectus unde repellat. Et fugiat nobis et fuga fugiat numquam recusandae.\n \rQuis aut perferendis est natus consequuntur sint perferendis aspernatur. Quia unde fuga tempore rerum mollitia distinctio est voluptatem est. Ratione nihil totam et commodi. Earum deserunt optio praesentium vel tempora consequuntur quia. Ut quos pariatur praesentium odit veniam fugit vero laboriosam cupiditate. Omnis et pariatur.',
    category: {
      name: 'Substráty, hnojiva',
      slug: 'substraty-hnojiva',
      background: 'https://api-dp-eshop.web.app/images/cat/substraty.webp',
      seo: {
        title: 'Trvalky | Zahradnictví u Juliuse',
        description: 'Rostliny, které žijí, dokud je nezapomenete dlouho zalít',
      },
    },
    image:
      'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    price: 589,
    similarProducts: [],
    stockState: { state: 'available', deliveryIn: 4, instockCount: 62 },
    seo: {
      title: 'Licensed Metal Bike | Zahradnictví u Juliuse',
      description:
        'Voluptatibus aliquid nulla soluta natus voluptatem perspiciatis laboriosam ipsam.',
      image:
        'https://api-dp-eshop.web.app/images/products/substraty-hnojiva/marguerite-5959944_1280.webp',
    },
    properties: [
      { name: 'Nároky na světlo', value: 'Na slunci', ico: 'fa-sun' },
      { name: 'Nároky na zalévání', value: '1x měsíčně', ico: 'fa-tint-slash' },
      { name: 'Teplota', value: '25°C+', ico: 'fa-thermometer-full' },
      { name: 'Výška rostliny', value: '50–100cm', ico: 'fa-ruler-vertical' },
      { name: 'Kvete', value: 'březen' },
      { name: 'Barva květu', value: 'modrá' },
    ],
  },
];
