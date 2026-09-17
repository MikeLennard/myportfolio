import UserTable from '../components/UserTable';
const Home = (props) => {

  return (
    <div className={`max-w-[90%] mx-auto p-4 rounded-lg shadow-md mt-8 ${props.class}`}>
      <h1>Home Page</h1>
      <UserTable />
    </div>
  )
}
export default Home
