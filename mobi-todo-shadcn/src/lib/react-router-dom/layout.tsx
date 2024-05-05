import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-[414px] flex-col items-center justify-start">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
