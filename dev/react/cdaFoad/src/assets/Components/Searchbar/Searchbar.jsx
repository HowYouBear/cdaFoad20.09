import style from "./Searchbar.module.scss"

function Searchbar() {
    return(
        <div className={style.searchBarFrame}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="" id=""  placeholder="Search"/>
        </div>
    )
}

export default Searchbar;