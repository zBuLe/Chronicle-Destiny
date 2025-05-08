# lib/rouge/lexers/gml.rb
module Rouge
  module Lexers
    class GML < RegexLexer
      title "GML"
      desc "GameMaker Language"

      tag 'gml'
      filenames '*.gml'

      def self.keywords
        @keywords ||= Set.new %w(
          var if else for while do break continue return switch case default function
          with instance_create_layer instance_destroy global enum repeat
        )
      end

      def self.builtins
        @builtins ||= Set.new %w(
          draw_text draw_sprite instance_create_layer matrix_set matrix_build matrix_build_identity
          vertex_create_buffer vertex_begin vertex_end vertex_submit
          vertex_position_3d vertex_normal vertex_texcoord vertex_color
        )
      end

      state :root do
        rule %r/\s+/, Text::Whitespace
        rule %r(//.*?$), Comment::Single
        rule %r("""(?:\\.|[^\\"])*?"""), Str::Double
        rule %r(".*?"), Str::Double
        rule %r/\d+\.\d+/, Num::Float
        rule %r/\d+/, Num::Integer
        rule %r/[(){}\[\],;]/, Punctuation
        rule %r/[+\-*\/=<>!&|]/, Operator
        rule %r/[a-zA-Z_][\w]*/ do |m|
          name = m[0]
          if self.class.keywords.include? name
            token Keyword
          elsif self.class.builtins.include? name
            token Name::Builtin
          else
            token Name
          end
        end
      end
    end
  end
end
