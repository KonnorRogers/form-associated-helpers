# A builder for adding implicit titles / permalinks.
class Builders::DocumentationResourceGenerator < SiteBuilder
  def build
    hook :resources, :post_init do |resource|
      next if resource.collection.label != "documentation"
      resource.data = resource.data.merge({
        "permalink" => resource_to_permalink(resource)
      })
    end
  end

  def resource_to_permalink(resource)
    resource.relative_path.to_s.split(File::Separator).slice(1..-1).join("/").gsub(/\/\d+-/, "/").gsub(".md", "") + "/"
  end
end
