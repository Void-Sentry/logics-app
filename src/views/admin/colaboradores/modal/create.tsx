import { Fragment, memo, Dispatch, SetStateAction, useState, useCallback } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ActionForm from '../form';
import { http } from 'utils/http';
import { Method } from 'constants/api';

interface ModalCreateProps {
    endpoint: string;
    isActive: boolean;
    entries: Record<string, any>;
    onActive: Dispatch<SetStateAction<boolean>>;
    isAtt: boolean;
    setAtt: Dispatch<SetStateAction<boolean>>;
}

export const ModalCreate = memo<ModalCreateProps>(({ endpoint, entries, isActive, onActive, isAtt, setAtt }) => {
    const [getForm, setForm] = useState(entries);
    const create = useCallback(async () => {
        await http(endpoint, { method: Method.POST, body: new URLSearchParams(Object.entries(getForm)) });
        onActive(!isActive)
        setAtt(!isAtt);
    }, [endpoint, getForm, isActive, isAtt, onActive, setAtt]);

    return (
        <Transition.Root show={isActive} as={Fragment}>
            <Dialog onClose={onActive} as="div" className="relative z-10">
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg  w-full">
                                <div className="bg-white dark:bg-navy-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4  w-full">
                                    <div className="sm:flex sm:items-start  w-full">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left  w-full">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-400 dark:text-white">
                                                Registro
                                            </Dialog.Title>
                                            <div className="mt-2 w-full">
                                                <ActionForm setForm={setForm} getForm={getForm} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-navy-800 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => onActive(!isActive)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={create}
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
    )
});