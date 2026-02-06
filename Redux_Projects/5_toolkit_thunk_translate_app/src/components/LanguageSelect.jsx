import React, { useMemo } from 'react'
import Select from 'react-select'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { changeLangs, setSource, setTarget } from '../redux/slices/translateSlice'
import { translateText } from '../redux/actions'

const LanguageSelect = () => {

    const { isLoading, error, languages } = useSelector((store) => store.langReducer);
    const { sourceLang, targetLang } = useSelector((store) => store.translateReducer);

    const dispatch = useDispatch();

    /* 
    * react-select kütüphanesinin istedigi veri formati
    const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
    ]
    */

    /*
        - language dizisindeki bütün nesnelerin key degerlerini
        - code > value
        - name > label'e cevrilmeli
        - her render sirasinda gereksiz hesaplamalar yapiliyor, bunun önüne gecmek icin useMemo kullanilmali
     */

    const formatted = useMemo(
        () =>
            languages.map((item) => ({
                value: item.code,
                label: item.name
            })), [languages]);

    return (
        <div className='flex gap-2 text-black'>
            <Select options={formatted}
                value={sourceLang}
                isLoading={isLoading}
                isDisabled={isLoading}
                onChange={(selected) => {

                    if (selected.value === targetLang.value)
                        return dispatch(changeLangs());
                }}
                className='flex-1' />

            <button onClick={() => dispatch(changeLangs())}
                className='bg-zinc-700 py-2 px-6 hover:bg-zinc-600 transition rounded text-white'>Degis</button>

            <Select options={formatted}
                value={targetLang}
                isLoading={isLoading}
                isDisabled={isLoading}
                onChange={(selected) => {
                    // eger secilen dil ve hedef dil ayni ise fonksiyonu durdur
                    if (targetLang.value === selected.value) return;

                    // eger secilen dil kaynak dil ile ayniysa yer degistir
                    if (sourceLang.value === selected.value)
                        return dispatch(changeLangs());
                    dispatch(setTarget(selected));
                    dispatch(translateText(selected));
                }}
                className='flex-1' />
        </div>
    )
}

export default LanguageSelect