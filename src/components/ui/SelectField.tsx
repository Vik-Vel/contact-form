"use client"; // Using client-side rendering directive for Next.js
import { Listbox } from "@headlessui/react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

// Type definition for the SelectField component props
interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: string[];
  error?: string;
}

// Functional component definition for SelectField
export function SelectField<T extends FieldValues>({
  name,
  control,
  label,
  options,
  error,
}: SelectFieldProps<T>) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1 text-black dark:text-white">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Listbox value={field.value ?? ""} onChange={field.onChange}>
            <div className="relative">
              <Listbox.Button className="w-full px-4 py-2 bg-transparent border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10 text-left">
                <span>{field.value || "-- Select --"}</span>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-10 w-full bg-white/90 backdrop-blur-sm border border-black text-black shadow-lg max-h-60 overflow-auto">
                {options.map((option, idx) => (
                  <Listbox.Option
                    key={idx}
                    value={option}
                    className={({ active }) =>
                      `cursor-pointer select-none px-4 py-2 ${
                        active ? "bg-indigo-500 text-white" : "text-black"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span className="flex justify-between items-center">
                        {option}
                        {selected && <CheckIcon className="w-4 h-4 ml-2" />}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        )}
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}
