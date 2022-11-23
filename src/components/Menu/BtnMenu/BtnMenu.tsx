import React, { useState } from 'react';

interface Props {
    menu: HTMLElement | null
}

export default function BtnMenu({ menu }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const ul = (document.getElementById('menu')?.children[0].children as HTMLCollection);

    if (ul) {
        let link = Array.from(ul);

        link.forEach((e) => {
            e.children[0].addEventListener('click', function () {
                if (menu) {
                    menu.style.transform = "translateX(540px)";
                    setIsOpen(false);
                }
            });
        })
    }

    const handleClick = () => {
        if (menu) {
            if (!isOpen) {
                menu.style.transform = "translateX(0)";
                setIsOpen(true);
            } else {
                menu.style.transform = "translateX(540px)";
                setIsOpen(false);
            }
        }
    }

    return (
        <button className="burger" onClick={handleClick}>
            <div className={'burgerline' + (isOpen ? ' isOpen' : '')}></div>
            <div className={'burgerline' + (isOpen ? ' isOpen2' : '')}></div>
            <div className={'burgerline' + (isOpen ? ' isOpen3' : '')}></div>
        </button>
    )
}
