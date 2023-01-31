import { userService } from "@/services";
import { useEffect, useState } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getAll().then((users) => {
      setUsers(users);
    });
  }, []);
  return (
    <>
      <div className="mx-1 md:mx-6">
        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 sm:inline-table">
          <thead class="text-white">
            {users.map((listValue, index) => {
              return (
                <tr class="bg-welmo-blue flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 [&:not(:first-child)]:sm:hidden">
                  <th class="p-3 text-left">Name</th>
                  <th class="p-3 text-left">Email</th>
                  <th class="p-3 text-left" width="110px">
                    Actions
                  </th>
                </tr>
              );
            })}
          </thead>
          <tbody class="flex-1 sm:flex-none">
            {users.map((listValue, index) => {
              return (
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 hover:bg-gray-100">
                  <td class="border-grey-light border p-3">
                    {listValue.firstName} {listValue.lastName}
                  </td>
                  <td class="border-grey-light border p-3 truncate">
                    {listValue.username}
                  </td>
                  <td class="border-grey-light border p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
