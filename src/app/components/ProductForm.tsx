"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddProductInput, addProductSchema } from "../library/validations";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@radix-ui/react-select";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const ProductForm = () => {
  const form = useForm<AddProductInput>({
    resolver: zodResolver(addProductSchema),
  });

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: AddProductInput) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="relative z-10 flex bg-black border rounded-[5px] p-4 mt-4">
      <Form {...form}>
        <form
          className="space-y-4"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col ">
            <div className="flex flex-row gap-4">
              <FormField
                control={control}
                name="description1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description1</FormLabel>
                    <FormControl>
                      <Input placeholder="description1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="description2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description2</FormLabel>
                    <FormControl>
                      <Input placeholder="description2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row gap-4">
              <FormField
                control={control}
                name="description3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description3</FormLabel>
                    <FormControl>
                      <Input placeholder="description3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="description4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description4</FormLabel>
                    <FormControl>
                      <Input placeholder="description4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <FormField
              control={control}
              name="mp4File"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mp4 File</FormLabel>
                  <FormControl>
                    <Input placeholder="mp4File" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="webMFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WebM File</FormLabel>
                  <FormControl>
                    <Input placeholder="webMFile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <FormField
                control={control}
                name="imageUrl1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Url 1</FormLabel>
                    <FormControl>
                      <Input placeholder="imageUrl1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="imageUrl2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Url 2</FormLabel>
                    <FormControl>
                      <Input placeholder="imageUrl2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={control}
                name="imageUrl3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Url 3</FormLabel>
                    <FormControl>
                      <Input placeholder="imageUrl3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="imageUrl4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Url 4</FormLabel>
                    <FormControl>
                      <Input placeholder="imageUrl4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <FormField
              control={control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input placeholder="stock" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select {...field} defaultValue="">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black">
                    <SelectGroup >
                      <SelectLabel>Type</SelectLabel>
                      <DropdownMenuSeparator/>
                      <SelectItem className="cursor-pointer" value="T-shirt">T-shirt</SelectItem>
                      <SelectItem className="cursor-pointer" value="Hoodie">Hoodie</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <FormControl>
                  <Input placeholder="type" {...field} />
                </FormControl> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <FormField
                control={control}
                name="sizes.XS"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size XS</FormLabel>
                    <FormControl>
                      <Input placeholder="XS" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={control}
                name="sizes.S"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size S</FormLabel>
                    <FormControl>
                      <Input placeholder="S" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
            </div>
            <div className="flex flex-row gap-4">
              <FormField
                control={control}
                name="sizes.M"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size M</FormLabel>
                    <FormControl>
                      <Input placeholder="M" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={control}
                name="sizes.L"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size L</FormLabel>
                    <FormControl>
                      <Input placeholder="L" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
            </div>
            <div className="flex flex-row gap-4">
              <FormField
                control={control}
                name="sizes.XL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size XL</FormLabel>
                    <FormControl>
                      <Input placeholder="XL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={control}
                name="sizes.XXL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size XL</FormLabel>
                    <FormControl>
                      <Input placeholder="XXL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
