import CartIcon from "./CartIcon";

const Header = () => {
    return (
        <div className="flex justify-between item-center mb-6">
            <h1 className="text-3x1 font-semibold">React ve Tailwind CSS Sepet Uygulamasi</h1>
           <CartIcon />
        </div>
    )
}

export default Header;