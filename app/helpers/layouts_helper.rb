module LayoutsHelper
  def sidebar_link_classes(name)
    "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold #{controller_name == name ? active_class : inactive_class}"
  end

  def sidebar_link_svg_classes(name)
    "size-6 shrink-0 #{controller_name == name ? active_svg_class : inactive_svg_class}"
  end

  private

  def active_svg_class
    "text-sky-500"
  end

  def inactive_svg_class
    "text-gray-400 group-hover:text-sky-500"
  end

  def active_class
    "bg-gray-50 text-sky-500"
  end

  def inactive_class
    "text-gray-700 hover:bg-gray-50 hover:text-sky-500"
  end
end
