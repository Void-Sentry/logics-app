import { Fragment, useRef, useState, memo, useCallback, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Row } from '@tanstack/react-table';
import ActionForm from '../form';
import { http } from 'utils/http';
import { Endpoint, Method } from 'constants/api';

interface ModalProps {
    endpoint: Endpoint;
    isAtt: boolean;
    setAtt: Dispatch<SetStateAction<boolean>>;
    row?: Row<Record<string, any>>;
}

export const Modal = memo<ModalProps>(({ endpoint, row: { original }, setAtt, isAtt }) => {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    const [getForm, setForm] = useState(original);

    const edit = useCallback(async () => {
        await http(`${endpoint}/${original.id}`, { method: Method.PUT, body: new URLSearchParams(Object.entries(getForm)) });
        setOpen(!open);
        setAtt(!isAtt);
    }, [endpoint, getForm, isAtt, open, original.id, setAtt]);

    const destroy = useCallback(async () => {
        await http(`${endpoint}/${original.id}`, { method: Method.DELETE });
        setOpen(!open);
        setAtt(!isAtt);
    }, [endpoint, isAtt, open, original.id, setAtt]);

    return (
        <>
            <button className="linear mt-2 w-[50%] rounded-xl py-[12px] text-base font-medium text-white transition duration-200 dark:text-brand-300 dark:hover:text-brand-200 dark:active:text-brand-200" onClick={() => setOpen(!open)}>Informações</button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white dark:bg-navy-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-400 dark:text-white">
                                                    Informações
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <ActionForm getForm={getForm} setForm={setForm} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark:bg-navy-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={destroy}
                                        >
                                            Excluir
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={edit}
                                            ref={cancelButtonRef}
                                        >
                                            Salvar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
});