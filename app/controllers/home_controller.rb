class HomeController < ApplicationController
  def index

  end

  def move
    coordinates_array = params[:current_position].split("").map(&:to_i)
    @current_face = params[:current_face]
    if (@current_face == "North" and coordinates_array[1] + 1 <= 4)
      # x same and y++
      coordinates_array[1] += 1
    elsif (@current_face == "South" and coordinates_array[1] - 1 >= 0)
      # x same and y--
      coordinates_array[1] -= 1
    elsif (@current_face == "East" and coordinates_array[0] + 1 <= 4)
      # x++ and y same
      coordinates_array[0] += 1
    elsif (@current_face == "West" and coordinates_array[0] - 1 >= 0)
      # x-- and y same
      coordinates_array[0] -= 1
    else
      @error = "Your Robot Will Fall From The Table"
    end
    @new_position = coordinates_array.join.to_s
  end

  def place
    @new_position = params[:new_position]
    @current_face = params[:current_face]
  end
end
