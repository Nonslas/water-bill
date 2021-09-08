import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Navbar } from './Navbar';
import { CustomersPage } from './features/customers/CustomersPage';
import { EditCustomerForm } from './features/customers/EditCustomerForm';
import DeleteCustomerPage from './features/customers/DeleteCustomerPage'
import BillsList from './features/bills/BillsList'
import AddBillForm from './features/bills/AddBillForm'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="container mx-auto">
          <Switch>
            <Route exact path="/customers" component={CustomersPage} />
            <Route path="/customers/:id/edit" component={EditCustomerForm} />
            <Route path="/customers/:id/delete" component={DeleteCustomerPage} />
            <Route exact path="/bills" component={BillsList} />
            <Route exact path="/bills/add" component={AddBillForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
