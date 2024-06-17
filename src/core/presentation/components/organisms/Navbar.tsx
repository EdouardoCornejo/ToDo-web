import { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useAppDispatch } from "../../store/hook";
import { setLogout } from "../../store/core/slices/auth";
import { deleteAllTodos } from "../../store/core/slices/todo/slice/todo.slice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      dispatch(setLogout());
      dispatch(deleteAllTodos());
    }, 1000);
  };

  /* Returning the HTML code. */
  return (
    <div className="mt-0 relative flex flex-row py-4 bg-gray-100 ">
      <Space style={{ width: "100%" }}>
        {/* A button that is used to logout the user. */}
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          className="flex w-md px-6 py-2 mt-auto ml-24 uppercase"
          onClick={() => enterLoading(1)}
        >
          Logout
        </Button>
      </Space>
    </div>
  );
};

export default Navbar;
