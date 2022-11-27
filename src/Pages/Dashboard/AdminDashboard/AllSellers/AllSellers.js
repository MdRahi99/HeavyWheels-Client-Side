import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const AllSellers = () => {
  const [deleteUser, setDeletingUser] = useState(null);

  const cancelModal = () => {
    setDeletingUser(null);
  };

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/users/seller", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteUser = (user) => {

    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${user.name} deleted successfully`);
        }
      });
  };

  const handleVerifySeller = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT', 
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('Verified successful.')
            refetch();
        }
    })
}

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10">
      <h2 className="text-2xl text-slate-200 bg-slate-900 p-3 my-4 text-center">All Sellers</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td className="flex flex-row gap-2 items-center">
                    <h1 className="text-xl font-bold">{user.name}{" "}</h1>
                    <h3 className="bg-sky-600 p-1 rounded font-bold text-slate-200">{user.role}</h3>
                </td>
                <td>{user.email}</td>
                <td>{user?.status !=='verified' ? <button onClick={()=>handleVerifySeller(user._id)} className='btn btn-info btn-xs'>Verify</button>: <div className="badge badge-success gap-2">{user?.status}</div> }
                </td>
                <td>
                  {" "}
                  <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteUser && (
        <ConfirmationModal 
        name={`Are you sure you want to delete ?`}
        message={`Deleting ${deleteUser.name} will be lost forever`}
        cancelModal = {cancelModal}
        successDelete={handleDeleteUser}
        modalInfo = {deleteUser}
        >  
        </ConfirmationModal>
      )}
    </div>
  );
};

export default AllSellers;
