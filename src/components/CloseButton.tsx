import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){
    return (
        <Popover.Button className='top-2 right-1 absolute text-zinc-400 hover:text-zinc-100' title="Fechar formulário de feedback">
            <X weight="bold" className= 'm-3 h-4'/>
        </Popover.Button>
    );
}