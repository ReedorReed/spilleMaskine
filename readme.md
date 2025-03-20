# Spillemaskine

Du skal lave en spillemaskine/enarmet tyveknægt.

Spillemaskinen skal først og fremmest være funktionel (fokuser på javascript), og skal som minimum overholde følgende krav:

- Spillemaskinen skal have 3 hjul/slots. (Du kan fx. arbejde med et array for hvert hjul)
- Der skal arbejdes med sandsynlighed ex. 3 citroner er lettere at ramme end 3 bar
- Maskinen fungerer kun så længe der er "penge"/credits i den.
- Man skal kunne se om man har vundet eller tabt efter hvert spin.
- Du skal lave et kanban board i Trello eller lignende til at styre din proces
  - Lav en back-log, hvor du bryder opgaven ned i delopgaver.
  - hold styr på delopgaverne undervejs i processen
- Overvej aktivt hvordan du organiserer din javascript.
  - Ekstraopgave: Opdel dit program i separate filer til hver funktionalitet.

I mappen icons ligger billeder du kan bruge til hjulene. Du må gerne selv finde andre billeder.

# Visuel inspiration

I mappen inspiration ligger nogle baggrundsbilleder og et screenshot, hvor du kan se hvordan spillemaskinen KUNNE se ud. Du må naturlivis gerne arbejde med din egen visuelle stil.

# Ekstra muligheder

Hvis du har tid kan du arbejde med de visuelle effekter. Du kan også tilføje lydeffekter.

# Psudeo code:

**The goal of this project, is to make slot machine in HTML, CSS & JS.**

- The slot machine should have three slots
- The user should be able to add credits, so they can spin the slots as long as there are credits available.
- The user should be able to hold one or two slots. and be able to see if they won or lost after each spin.
- There should be a point system.

The three slots wil be made with an array[] and a loop to loop through the array. The random numbers will be generated with the Math.random() & Math.floor() functions in JS.
An if statement will be used to compare slot1, 2 & 3 to see if the user has won.

There will be 3 buttons so the user can click them and the slots will:

- Spin
- Hold; hold limit so not to hold for ever
- Add credits
