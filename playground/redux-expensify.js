import { createStore ,combineReducers } from 'redux';
import uuid from 'uuid'


const addExpense = ({
  description= '',
  note='',
  amount=0,
  createdAt=0
} = {}
) => ({
  type:'ADD_EXPENSE',
  expense:{
    id:uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({id} = {}
) => ({
  type:'REMOVE_EXPENSE',
  id
})

const editExpense = ({id , updates} = {}
) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
})

const setTextFilter = ({text} = {}
) => ({
  type:'SET_TEXT_FILTER',
  text
})

const setStartDate = ({date} = {}
) => ({
  type:'SET_START_DATE',
  date
})

const setEndDate = ({date} = {}
) => ({
  type:'SET_END_DATE',
  date
})

const sortByAmount = ({} = {}
) => ({
  type:'SORT_BY_AMOUNT',
})

const sortByDate = ({} = {}
) => ({
  type:'SORT_BY_DATE',
})



const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return [
          ...state,action.expense
        ]
      case 'REMOVE_EXPENSE':
        return state.filter(({id}) => {
          return id !== action.id
        })
      case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if (expense.id === action.id) {
              return { ...expense,
              ...action.updates

            }
          }else {
            return expense
          }
        })

      default:
        return state;

    }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy:'date',
  startDate:undefined,
  endDate:undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
         return { ... state ,
         text: action.text}
     case 'SORT_BY_AMOUNT':
          return { ... state ,
          sortBy: "amount"}
    case 'SORT_BY_DATE':
         return { ... state ,
         sortBy: "date"}

     case 'SET_START_DATE':
          return { ... state ,
          startDate: action.date}

      case 'SET_END_DATE':
           return { ... state ,
           endDate: action.date}

      default:
        return state;

    }
}

const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch

  })
}


const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
  console.log(visibleExpenses);
})
const expense1 = store.dispatch(addExpense({description:'rent',amount:5000, createdAt: 7}));
const expense2 = store.dispatch(addExpense({description:'cookie',amount:500,createdAt: 8}));

// store.dispatch(removeExpense({id:expense1.expense.id}));
// store.dispatch(editExpense({id:expense2.expense.id,  updates:{amount: 900} }))
// store.dispatch(setTextFilter({text:'rent'}))
//
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
//
store.dispatch(setStartDate({date:125}))
store.dispatch(setEndDate({date:34}))

const demoState = {
  expenses: [{
    id:'poijfgbgdggb',
    description:'january rent',
    note:'paying rent is sad',
    amount: 54500,
    createdAt: 0
  }],
  filters:{
    text: 'rent',
    sortby:'amount',
    startDate:undefined,
    endDate:undefined
  }
};
