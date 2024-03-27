// - default = ['Never(+0)','Rarely(+1)','Sometimes(+2)','Often(+3)','Always(+4)', ]
// - , options:['','','','','']

const symptoms = [
  {instruction:'Answer These questions thinking of your knee symptoms during the last week'},
  {question:'Do you have swelling in your knee',value:0, options:['Never(+0)','Rarely(+1)','Sometimes(+2)','Often(+3)','Always(+4)']},
  {question:'Do you feel grinding, hear clicking, or any other type of noise when your knee moves',value:0, options:['Never(+0)','Rarely(+1)','Sometimes(+2)','Often(+3)','Always(+4)']},
  {question:'Does your knee catch or hang up when moving',value:0, options:['Never(+0)','Rarely(+1)','Sometimes(+2)','Often(+3)','Always(+4)']},
  {question:'Can you straighten your knee fully',value:0,options:['Always(+0)','Often(+1)','Sometimes(+2)','Rarely(+3)','Never(+4)']},
  {question:'Can you bend your knee fully?',value:0,options:['Always(+0)','Often(+1)','Sometimes(+2)','Rarely(+3)','Never(+4)']},
  {instruction:'Stiffness is a sensation of restriction or slowness in the ease with which you move your knee joint'},
  {question:'How severe is your knee joint stiffness after first wakening in the morning?',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'How severe is your knee joint stiffness after sitting , lying, or resting later in the day',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
]

const pain = [
  {question:'How often do you experience knee pain',value:0,options:['Never(+0)','Monthly(+1)','Weekly(+2)','Daily(+3)','Always(+4)']},
  {instruction:'What amount of knee pain have you experienced the last week during the following activities'},
  {question:'Twisting/pivoting on your knee',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Straightening knee fully',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Bending knee fully',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Walking on flat surface',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Going up or down stairs',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'At night while in bed',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Sitting or lying',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Standing upright',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
]

const dailyLiving = [
  {instruction:'This section describes your ability to move around and to look after yourself. For each of the following activities, please indicate the degree of difficulty you have experienced in the last week due to your knees'},
  {question:'Descending stairs',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Ascending stairs',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Rising from sitting',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Standing',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Bending to the floor/pick up an object',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Walking on a flat surface',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'getting in/out of your car',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Going shopping',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Puttingn on socks/stockings',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Rising from bed',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Taking off socks/stockings',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Lying in bed (turning over, maintaining knee position)',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Getting in/out of bath',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Sitting',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Getting on/off toilet',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Heavy domestic duties (moving heavy boxes, scrubbing floors, etc)',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Light domestic duties (cooking, dusting, etc)',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
]

const functionSports = [
  {instruction:'This section describes your ability to be active on a higher level. For each of the following activities, please indicate the degree of difficulty you hav experinced in the last week due to your knee.'},
  {question:'Squatting',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Running',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Jumping',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Twisting/pivoting on your injured knee',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
  {question:'Kneeling',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},
]

const qualityOfLife = [
  {question:'How often are you aware of your knee problems',value:0,options:['Never(+0)','Monthly(+1)','Weekly(+2)','Daily(+3)','Always(+4)']},
  {question:'Have you modified your life style to avoid activities potentially damaging to your knee',value:0,options:['Not at All(+0)','Midly(+1)','Moderately(+2)','Severely(+3)','Totally(+4)']}, 
  {question:'How much are you troubled with lac of confidence in your knee',value:0, options:['Not at All(+0)','Mildly(+1)','Moderately(+2)','Severely(+3)','Extremely(+4)']},
  {question:'In general, how much difficulty do you have with your knee',value:0,options:['None(+0)','Mild(+1)','Moderate(+2)','Severe(+3)','Extreme(+4)']},

]
const name = {first:'', last:''}


const koosVariables = [symptoms,pain,dailyLiving,functionSports,qualityOfLife,name]

export default koosVariables