import { FilterWrap, SubTitle } from './Filter.styled'

const Filter = ({onFilterContact}) => {
    return (
        <FilterWrap>
            <SubTitle className="text">Find contacts by name</SubTitle>
            <input className="inpuText" type="text" onChange={(e) => {
                onFilterContact(e.currentTarget.value)
            }}/>
        </FilterWrap>
    )
}

export default Filter