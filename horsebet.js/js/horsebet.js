_______________________________________________________________________

           Title: Horsebet
         Version: 1.0
            Idea: Thomas Breivi
          Author: Sigurd Shaathun
     Description: Race the horses and win lots of money!
                  
_______________________________________________________________________

Command translation:

->              Single arrow (located on the keyboard)
=>              Double arrow (press: [shift] [prgm] [f1] [f1])
_               Display, -Disp- (press: [shift] [prgm] [f4])
_______________________________________________________________________

 Program :

Int 20Ran->+1->A
Int 20Ran->+1->B
Int 20Ran->+1->C
Int 20Ran->+1->D
Lbl 1
"********************
**  H O R S E B E T
*********************
*"
"Todays stable hints:
"_
"Track 1:":A_
"Track 2:":B_
"Track 3:":C_
"Track 4:":D_
"Which horse"?->N
Int N>4=>Goto 1
Int N<1=>Goto 1
Lbl 2
"Your account":S_
"How much do yo
u bet"?->T
Int S<T=>"To high"
Int S<T=>Goto 2
Int T<1=>"To low"
Int T<1=>Goto 2
Int ARan->+1->A
Int BRan->+1->B
Int CRan->+1->C
Int DRan->+1->D
Int N=1=>Int A>B=>Int A
>C=>Int A>D=>Goto 4
Int N=2=>Int B>A=>Int B
>C=>Int B>D=>Goto 4
Int N=3=>Int C>B=>Int C
>B=>Int C>D=>Goto 4
Int N=4=>Int B>A=>Int B
>C=>Int B>D=>Goto 4
Goto 5
Lbl 4
"The winner horse:":N_
"You win"
S+T->S
"Your Account":S_
Goto 6
Lbl 5
"LOOSER"
Goto 6
Lbl 6

_______________________________________________________________________