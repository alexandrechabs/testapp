import Navbar from "@/components/Navbar";
import Table from "@/components/Table";

const TablePage = (props) => {
  return (
    <>
      <div className="bg-red-300 min-h-screen">
        <Navbar color="from-blue-500" />
        <Table />
      </div>
    </>
  );
};

export default TablePage;