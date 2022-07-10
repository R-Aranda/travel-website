require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")


get "/" do
  erb :home
end

get "/api/v1/posts.json" do
  posts = File.read("posts.json")
end
